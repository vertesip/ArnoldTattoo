<template>
  <section id="booking">
    <div class="formbold-main-wrapper">
      <!-- Author: FormBold Team -->
      <!-- Learn More: https://formbold.com -->
      <div class="formbold-form-wrapper">
        <div class="formbold-mb-5">
          <label for="name" class="formbold-form-label"> Full Name </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="formbold-form-input"
          />
        </div>
        <div class="formbold-mb-5">
          <label for="phone" class="formbold-form-label"> Phone Number </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            class="formbold-form-input"
          />
        </div>
        <div class="formbold-mb-5">
          <label for="email" class="formbold-form-label"> Email Address </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            class="formbold-form-input"
          />
        </div>
        <div class="flex flex-wrap formbold--mx-3">
          <div class="w-full sm:w-half formbold-px-3">
            <date-picker v-model="time1" valueType="format"></date-picker>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <label for="time" class="formbold-form-label"> Time </label>
              <input
                type="time"
                name="time"
                id="time"
                class="formbold-form-input"
              />
            </div>
          </div>
        </div>

        <div class="formbold-mb-5 formbold-pt-3">
          <label class="formbold-form-label formbold-form-label-2">
            Address Details
          </label>
          <div class="flex flex-wrap formbold--mx-3">
            <div class="w-full sm:w-half formbold-px-3">
              <div class="formbold-mb-5">
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="w-full sm:w-half formbold-px-3">
              <div class="formbold-mb-5">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="w-full sm:w-half formbold-px-3">
              <div class="formbold-mb-5">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="w-full sm:w-half formbold-px-3">
              <div class="formbold-mb-5">
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  class="formbold-form-input"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button @click="fetch()" class="formbold-btn">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jQuery from "jquery";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "BookingSection",
  components: { DatePicker },
  data() {
    return {
      time1: null,
    };
  },
  mounted() {
    /**
     * JSON-RPC Client Exception class
     *
     * @param String code
     * @param String message
     */
    const JSONRpcClientException = function (code, message) {
      this.code = code;
      this.message = message;
    };
    JSONRpcClientException.prototype = jQuery.extend(
      JSONRpcClientException.prototype,
      {
        /**
         * Magic method. COnvert object to string.
         *
         * @return String
         */
        toString() {
          return "[" + this.code + "] " + this.message;
        },
      }
    );

    /**
     * JSON-RPC Client
     *
     * @param Object options
     */
    const JSONRpcClient = function (options) {
      this.setOptions(options);
      this.init();
    };
    JSONRpcClient.prototype = jQuery.extend(JSONRpcClient.prototype, {
      /**
       * Default options
       */
      options: {
        onerror() {},
        onsuccess() {},
        url: "",
        headers: {},
      },
      current: 1,
      onerror: null,
      onsuccess: null,
      onstart: null,

      /**
       * Init client
       */
      init() {
        this.onerror = this.getParam("onerror");
        this.onsuccess = this.getParam("onsuccess");

        this.initMethods();
      },

      /**
       * Init API methiods by url
       */
      initMethods() {
        const instance = this;
        // get all methods
        jQuery.ajax(this.getParam("url"), {
          async: false,
          success(data) {
            if (data.methods) {
              // create method
              jQuery.each(data.methods, function (methodName, methodParams) {
                const method = function () {
                  const params = new Array();
                  for (let i = 0; i < arguments.length; i++) {
                    params.push(arguments[i]);
                  }
                  const id = instance.current++;
                  const callback = params[params.length - 1];
                  const request = {
                    jsonrpc: "2.0",
                    method: methodName,
                    params,
                    id,
                  };

                  let async = false;
                  if (jQuery.type(callback) == "function") {
                    async = true;
                    params.pop();
                  }

                  let res = null;
                  // API request
                  jQuery.ajax(instance.getParam("url"), {
                    contentType: "application/json",
                    type: methodParams.transport,
                    processData: false,
                    dataType: "json",
                    cache: false,
                    data: JSON.stringify(request),
                    headers: instance.getParam("headers"),
                    async,
                    success(result) {
                      if (jQuery.type(result.error) == "object") {
                        res = new JSONRpcClientException(
                          result.error.code,
                          result.error.message
                        );
                        instance.onerror(res);
                      } else {
                        res = result.result;
                        if (jQuery.type(callback) == "function") {
                          callback(res);
                        }
                      }
                      instance.onsuccess(res, id, methodName);
                    },
                  });
                  if (!async) {
                    return res;
                  }
                };

                instance[methodName] = method;
              });
            } else {
              throw Exception("Methods could not be found");
            }
          },
        });
      },

      /**
       * Set client options
       *
       * @param Object options
       */
      setOptions(options) {
        this.options = jQuery.extend({}, this.options, options);
      },

      /**
       * Get client param, if param is not available in this.options return defaultValue
       *
       * @param String key
       * @param mixed defaultValue
       * @return mixed
       */
      getParam(key, defaultValue) {
        if (jQuery.type(this.options[key]) != "undefined") {
          return this.options[key];
        }
        return defaultValue;
      },
    });

    const loginClient = new JSONRpcClient({
      url: "https://user-api.simplybook.me" + "/login",
      onerror(error) {},
    });
    this.token = loginClient.getToken(
      "ArnoldTattoo",
      "3198c060ae8df02d82c3f7ae25d00aaa87aee4adba9edc5c12fe673281651c40"
    );

    this.client = new JSONRpcClient({
      url: "https://user-api.simplybook.me",
      headers: {
        "X-Company-Login": "ArnoldTattoo",
        "X-Token": this.token,
      },
      onerror(error) {},
    });
  },
  methods: {
    fetch() {
      (async () => {
        const rawResponse = await fetch(
          "https://user-api-v2.simplybook.me/admin/bookings",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Company-Login": "ArnoldTattoo",
              "X-Token": this.token,
            },
            //body: JSON.stringify({ a: 1, b: "Textual content" }),
          }
        );
        const content = await rawResponse.json();

        console.log(content);
      })();
    },
  },
};
</script>
<style scoped>
section {
  /* background: #0d0d0d; */
  background: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
.formbold-mb-5 {
  margin-bottom: 20px;
}
.formbold-pt-3 {
  padding-top: 12px;
}
.formbold-main-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
}

.formbold-form-wrapper {
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  background: white;
}
.formbold-form-label {
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #07074d;
  margin-bottom: 12px;
}
.formbold-form-label-2 {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
}

.formbold-form-input,
.mx-datepicker {
  width: 100%;
  padding: 12px 24px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background: white;
  font-weight: 500;
  font-size: 16px;
  color: #6b7280;
  outline: none;
  resize: none;
}
.formbold-form-input:focus {
  border-color: #6a64f1;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold-btn {
  text-align: center;
  font-size: 16px;
  border-radius: 6px;
  padding: 14px 32px;
  border: none;
  font-weight: 600;
  background-color: #6a64f1;
  color: white;
  width: 100%;
  cursor: pointer;
}
.formbold-btn:hover {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}

.formbold--mx-3 {
  margin-left: -12px;
  margin-right: -12px;
}
.formbold-px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.w-full {
  width: 100%;
}
@media (min-width: 540px) {
  .sm\:w-half {
    width: 50%;
  }
}
</style>
