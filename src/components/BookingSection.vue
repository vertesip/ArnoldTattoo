<template>
  <section id="booking">
    <div class="container">
      <div class="header">
        <h3 class="text-muted">Simplybook API</h3>
      </div>
      <div class="jumbotron">
        <div class="row">
          <div class="col-sm-12">
            <form role="form" class="form-horizontal">
              <div id="schedule">
                <div class="form-group">
                  <label for="event_id" class="control-label"
                    >Select service</label
                  >
                  <select id="event_id" class="form-control time-handler">
                    <option></option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="unit_id" class="control-label"
                    >Select service performer</label
                  >
                  <select id="unit_id" class="form-control time-handler">
                    <option></option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-3">
                      <label for="date" class="control-label"
                        >Select date start</label
                      >
                      <div id="date"></div>
                    </div>
                    <div class="col-sm-4">
                      <label for="unit_id" class="control-label"
                        >Select time start</label
                      >
                      <div id="time" class="row">
                        <div class="col-sm-12" id="busy">
                          All slots are busy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group" id="qty-element">
                  <label for="qty" class="control-label"
                    >Select bookings quantity</label
                  >
                  <select name="qty" id="qty" class="form-control time-handler">
                    <option value="1">1</option>
                  </select>
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-lg btn-default"
                    id="book"
                  >
                    Book
                  </button>
                </div>
              </div>
              <div id="client">
                <div>
                  <dl class="dl-horizontal">
                    <dt>Service</dt>
                    <dd id="event_name"></dd>
                  </dl>
                  <dl class="dl-horizontal">
                    <dt>Service performer</dt>
                    <dd id="unit_name"></dd>
                  </dl>
                  <dl class="dl-horizontal">
                    <dt>Selected date and time</dt>
                    <dd>
                      <span id="date_start"></span> -
                      <span id="date_end"></span>
                    </dd>
                  </dl>
                </div>

                <div class="form-group">
                  <label for="name" class="col-sm-2 control-label"
                    >Client name</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="name"
                      class="form-control"
                      id="name"
                      placeholder="Client name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="col-sm-2 control-label"
                    >Email</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone" class="col-sm-2 control-label"
                    >Phone</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div id="additional-fields"></div>

                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-lg btn-default"
                    id="cancel"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    id="add_booking"
                  >
                    Add more bookings
                  </button>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    id="confirm_batch"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    class="btn btn-lg btn-primary"
                    id="confirm"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jQuery from "jquery";

export default {
  name: "BookingSection",
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
    const token = loginClient.getToken(
      "ArnoldTattoo",
      "3198c060ae8df02d82c3f7ae25d00aaa87aee4adba9edc5c12fe673281651c40"
    );

    this.client = new JSONRpcClient({
      url: "https://user-api.simplybook.me",
      headers: {
        "X-Company-Login": "ArnoldTattoo",
        "X-Token": token,
      },
      onerror(error) {},
    });
    jQuery(document).ready(function () {
      Date.prototype.format = function () {
        return (
          this.getFullYear() +
          "-" +
          this.strPad(this.getMonth() + 1) +
          "-" +
          this.strPad(this.getDate())
        );
      };

      Date.prototype.strPad = function (val) {
        if (val > 9) {
          return val.toString();
        }
        return "0" + val;
      };

      var Scheduler = function (options) {
        this.init(options);
      };

      jQuery.extend(Scheduler.prototype, {
        options: {
          api_url: "https://user-api.simplybook.me",
          api_login: "ArnoldTattoo",
          api_key:
            "3198c060ae8df02d82c3f7ae25d00aaa87aee4adba9edc5c12fe673281651c40",
        },
        /*options: {
            'api_url': '//user-api.em.dimka.notando.com.ua',
            'api_login': 'recap',
            'api_key': '8f5259e8e9f6d9342d40ef523b2f1fe52c0a3b543d140b5a3da906f17ab30e11'
        },*/
        client: null,
        anyUnitData: null,

        events: {},
        units: {},
        attachedUnits: [],

        eventId: null,
        unitId: null,
        qty: 1,
        selectedUnitId: null,
        date: null,
        time: null,

        weekends: {},

        groupBookingsAllowed: false,
        multipleBookingsAllowed: false,

        batchId: null,

        additionalFields: [],

        init: function (options) {
          this.options = jQuery.extend({}, this.options, options);
          this.initClient();
          this.initElements();
          this.initEvents();
        },

        initClient: function () {
          var instance = this;

          var loginClient = new JSONRpcClient({
            url: this.getParam("api_url") + "/login",
            onerror: function (error) {
              instance.error(error);
            },
          });
          var token = loginClient.getToken(
            this.getParam("api_login"),
            this.getParam("api_key")
          );
          this.client = new JSONRpcClient({
            url: this.getParam("api_url"),
            headers: {
              "X-Company-Login": this.getParam("api_login"),
              "X-Token": token,
            },
            onerror: function (error) {
              instance.error(error);
            },
          });
          this.groupBookingsAllowed =
            this.client.isPluginActivated("group_booking");
          this.multipleBookingsAllowed =
            this.client.isPluginActivated("multiple_booking");
        },

        initElements: function () {
          jQuery("#qty-element").hide();

          var instance = this;
          /* jQuery("#date").datepicker({
            startDate: new Date(),
            todayHighlight: true,
            format: "yyyy-mm-dd",
            beforeShowDay: function (date) {
              if (instance.weekends[date.format()] == true) {
                return { enabled: false };
              }
            },
          }); */
          this.client.getEventList(function (events) {
            instance.events = events;
            for (var id in events) {
              var event = events[id];
              jQuery("#event_id").append(
                jQuery(
                  '<option value="' + event.id + '">' + event.name + "</option>"
                )
              );
              if (event.unit_map) {
                for (var unitId in event.unit_map) {
                  instance.attachedUnits.push(unitId);
                }
              }
            }
          });
          this.client.getAnyUnitData(function (data) {
            instance.anyUnitData = data;
            instance.client.getUnitList(function (units) {
              instance.units = units;
              instance.setUnitList(units);
            });
          });
          this.client.getFirstWorkingDay(null, function (date) {
            instance.updateWorkCalendar(
              new Date(Date.parse(date)),
              function () {
              /*   jQuery("#date").datepicker("update", date); */
              }
            );
          });
          if (!this.multipleBookingsAllowed) {
            jQuery("#add_booking").hide();
          }
          jQuery("#confirm_batch").hide();
        },

        initEvents: function () {
          var instance = this;
          jQuery("#event_id").change(function (event, value) {
            instance.setEventId(jQuery(this).val());
          });
          jQuery("#unit_id").change(function () {
            instance.setUnitId(jQuery(this).val());
          });
          jQuery("#qty").change(function () {
            instance.setQty(jQuery(this).val());
          });
          jQuery("#date")
            .on("changeDate", function (event) {
              if (event.date) {
                instance.setDate(event.date.format());
              }
            })
            .on("changeMonth", function (event) {
              instance.updateWorkCalendar(event.date);
            });
          jQuery(".time-handler").change(function () {
            instance.loadStartTimeMatrix();
          });
          jQuery(document).on("click", ".time-item", function () {
            jQuery(".time-item.active").removeClass("active");
            jQuery(this).addClass("active");
            instance.setTime(jQuery(this).data("time"));
            if (instance.unitId == -1) {
              var unitArr = instance.client.getAvailableUnits(
                instance.eventId,
                instance.date + " " + instance.time,
                instance.qty
              );
              if (unitArr.length) {
                instance.selectedUnitId = unitArr[0];
              }
            }
          });
          jQuery("#book").click(function () {
            if (instance.selectedUnitId) {
              jQuery("#unit_id").val(instance.selectedUnitId);
            }
            instance.showClientInfo();
          });
          jQuery("#confirm").click(function () {
            instance.bookAppointment();
          });
          jQuery("#confirm_batch").click(function () {
            instance.confirmBatch();
          });
          jQuery("#add_booking").click(function () {
            instance.addAppointment(true);
          });
          jQuery("#cancel").click(function () {
            instance.cancel();
          });
        },

        setQty: function (qty) {
          this.qty = qty;

          if (qty > 1) {
            jQuery("#add_booking").hide();
          } else {
            jQuery("#add_booking").show();
          }
        },

        setUnitList: function (units) {
          var oldVal = jQuery("#unit_id").val();

          jQuery("#unit_id option[value]").remove();
          if (this.anyUnitData) {
            jQuery("#unit_id").append(
              // -1 means any unit only for JS. We don't send it to server.
              jQuery(
                '<option value="-1">' + this.anyUnitData.name + "</option>"
              )
            );
          }
          for (var id in units) {
            var unit = units[id];
            jQuery("#unit_id").append(
              jQuery(
                '<option value="' + unit.id + '">' + unit.name + "</option>"
              )
            );
          }
          if (units[oldVal]) {
            jQuery("#unit_id").val(oldVal);
          } else {
            this.setUnitId("");
          }
        },

        setEventId: function (id) {
          this.eventId = id;
          var event = this.events[id];
          var list = {};

          if (event.unit_map) {
            for (var unitId in event.unit_map) {
              list[unitId] = this.units[unitId];
            }
          } else {
            for (var unitId in this.units) {
              if (jQuery.inArray(unitId, this.attachedUnits) == -1) {
                list[unitId] = this.units[unitId];
              }
            }
          }

          this.setUnitList(list);

          if (this.groupBookingsAllowed && !this.batchId) {
            var max = 1;
            for (var unitId in list) {
              if (list[unitId] && list[unitId].qty > max) {
                max = list[unitId].qty;
              }
            }

            this.setMaxQty(max);
          } else {
            jQuery("#qty-element").hide();
          }

          this.loadAdditionalFields(id);
        },

        setMaxQty: function (max) {
          jQuery("#qty").empty();
          this.qty = 1;
          for (var i = 1; i <= max; i++) {
            jQuery("#qty").append(
              '<option value="' + i + '">' + i + "</option>"
            );
          }
          if (max > 1) {
            jQuery("#qty-element").show();
          } else {
            jQuery("#qty-element").hide();
          }
        },

        setUnitId: function (id) {
          var instance = this;
          this.unitId = id;
          if (id && !this.date) {
            if (id == -1) {
              id = null;
            }
            this.client.getFirstWorkingDay(id, function (date) {
              instance.updateWorkCalendar(
                new Date(Date.parse(date)),
                function () {
                  instance.setDate(date);
                }
              );
            });
          }
        },

        updateWorkCalendar: function (date, callback) {
          if (!date) {
          /*   date = jQuery("#date").datepicker("getDate"); */
          }
          var instance = this;
          var params = {
            unit_group_id: this.unitId,
            event_id: this.eventId,
          };
          this.client.getWorkCalendar(
            date.getFullYear(),
            date.getMonth() + 1,
            params,
            function (data) {
              instance.weekends = {};
              for (var dt in data) {
                if (data[dt].is_day_off == "1") {
                  instance.weekends[dt] = true;
                }
              }
            /*   jQuery("#date").datepicker("update"); */
              if (jQuery.type(callback) == "function") {
                callback();
              }
            }
          );
        },

        loadAdditionalFields: function (eventId) {
          var instance = this;
          this.client.getAdditionalFields(eventId, function (data) {
            instance.clearAdditionalFields();
            instance.additionalFields = data;
            for (var i = 0; i < data.length; i++) {
              instance.addAdditionalField(data[i]);
            }
          });
        },

        clearAdditionalFields: function () {
          jQuery("#additional-fields").empty();
          this.additionalFields = [];
        },

        addAdditionalField: function (field) {
          var container = jQuery('<div class="form-group"></div>');
          var title = jQuery(
            '<div class="col-sm-2 control-label">' + field.title + "</div>"
          );

          container.append(title);

          var fieldContainer = jQuery('<div class="col-sm-10"></div>');

          container.append(fieldContainer);

          var fieldNode = null;
          switch (field.type) {
            case "checkbox":
              fieldNode = jQuery(
                '<input type="checkbox" name="' +
                  field.name +
                  '" id="' +
                  field.name +
                  '" value="1" />'
              );
              if (field["default"]) {
                fieldNode.attr("checked", true);
              }
              break;
            case "select":
              fieldNode = jQuery(
                '<select name="' +
                  field.name +
                  '" id="' +
                  field.name +
                  '"></select>'
              );
              var values = field.values.split(",");
              for (var k = 0; k < values.length; k++) {
                fieldNode.append(
                  jQuery(
                    '<option value="' +
                      values[k].trim() +
                      '">' +
                      values[k].trim() +
                      "</option>"
                  )
                );
              }
              if (field["default"]) {
                fieldNode.val(field["default"]);
              }
              break;
            case "textarea":
              fieldNode = jQuery(
                '<textarea name="' +
                  field.name +
                  '" id="' +
                  field.name +
                  '"></textarea>'
              );
              if (field["default"]) {
                fieldNode.val(field["default"]);
              }
              break;
            default:
              fieldNode = jQuery(
                '<input type="text" name="' +
                  field.name +
                  '" id="' +
                  field.name +
                  '" />'
              );
              if (field["default"]) {
                fieldNode.val(field["default"]);
              }
              break;
          }

          if (fieldNode) {
            if (field.type == "checkbox") {
              fieldNode.addClass("checkbox");
            } else {
              fieldNode.addClass("form-control");
            }

            fieldContainer.append(fieldNode);
            jQuery("#additional-fields").append(container);
          }
        },

        setDate: function (date) {
          this.date = date;

         /*  jQuery("#date").datepicker("update", date); */
          this.loadStartTimeMatrix();
        },

        setTime: function (time) {
          this.time = time;
        },

        showClientInfo: function () {
          var instance = this;
          var unitId = this.unitId;
          if (unitId == -1) {
            unitId = null;
          }
          this.client.calculateEndTime(
            this.date + " " + this.time,
            this.eventId,
            this.unitId,
            function (res) {
              jQuery(".has-error").removeClass("has-error");
              if (!res) {
                jQuery("#time").parent().addClass("has-error");
              }
              if (!instance.eventId) {
                jQuery("#event_id").parent().addClass("has-error");
              }
              if (!instance.unitId) {
                jQuery("#unit_id").parent().addClass("has-error");
              }
              if (!instance.date) {
                jQuery("#date").parent().addClass("has-error");
              }
              if (!instance.time) {
                jQuery("#time").parent().addClass("has-error");
              }
              if (!jQuery(".has-error").length) {
                jQuery("#schedule").hide();
                jQuery("#client").show();

                jQuery("#event_name").text(
                  instance.events[jQuery("#event_id").val()].name
                );
                jQuery("#unit_name").text(
                  instance.units[jQuery("#unit_id").val()].name
                );
                jQuery("#date_start").text(instance.date + " " + instance.time);
                jQuery("#date_end").text(res);
              }
            }
          );
        },

        bookAppointment: function () {
          if (this.validateClientData()) {
            var unitId = this.unitId;
            if (unitId == -1) {
              unitId = this.selectedUnitId;
            }
            if (!this.qty || this.qty < 1) {
              this.qty = 1;
            }
            var res = this.client.book(
              this.eventId,
              unitId,
              this.date,
              this.time,
              {
                name: jQuery("#name").val(),
                email: jQuery("#email").val(),
                phone: jQuery("#phone").val(),
              },
              this.getAdditionalFieldsValues(),
              this.qty
            );

            if (res.bookings) {
              alert("You successfully booked appointment.");
              location.href = "";
            }
          }
        },

        addAppointment: function (toFirstStep) {
          if (this.validateClientData()) {
            if (!this.batchId) {
              this.batchId = this.client.createBatch();
            }

            var unitId = this.unitId;
            if (unitId == -1) {
              unitId = this.selectedUnitId;
            }
            if (!this.qty || this.qty < 1) {
              this.qty = 1;
            }
            var res = this.client.book(
              this.eventId,
              unitId,
              this.date,
              this.time,
              {
                name: jQuery("#name").val(),
                email: jQuery("#email").val(),
                phone: jQuery("#phone").val(),
              },
              this.getAdditionalFieldsValues(),
              1,
              this.batchId
            );

            jQuery("#confirm").hide();
            jQuery("#confirm_batch").show();

            if (toFirstStep) {
              jQuery("#schedule").show();
              jQuery("#client").hide();
            }

            return res;
          }
        },

        confirmBatch: function () {
          var res = this.addAppointment();

          alert("Your bookings were successfully booked.");

          location.href =
            "confirm_batch.php?batch_id=" +
            this.batchId +
            "&batch_type=" +
            res.batch_type +
            "&batch_hash=" +
            res.batch_hash;
        },

        getAdditionalFieldsValues: function () {
          var result = {};
          for (var i = 0; i < this.additionalFields.length; i++) {
            var field = this.additionalFields[i];
            value = null;
            if (field.type == "checkbox") {
              if (jQuery("#" + field.name).is(":checked")) {
                value = 1;
              } else {
                value = 0;
              }
            } else {
              value = jQuery("#" + field.name).val();
            }
            result[field.name] = value;
          }

          return result;
        },

        validateClientData: function () {
          jQuery(".has-error").removeClass("has-error");
          if (!jQuery("#name").val()) {
            jQuery("#name").parent().addClass("has-error");
          }
          if (!jQuery("#email").val()) {
            jQuery("#email").parent().addClass("has-error");
          }
          if (!jQuery("#phone").val()) {
            jQuery("#phone").parent().addClass("has-error");
          }
          if (!jQuery(".has-error").length) {
            return true;
          }
          return false;
        },

        cancel: function () {
          jQuery("#schedule").show();
          jQuery("#client").hide();
        },

        loadStartTimeMatrix: function () {
          var instance = this;
          if (this.unitId && this.eventId && this.date) {
            jQuery("#time").empty();
            this.setTime(null);
            var unitId = this.unitId;
            if (unitId == -1) {
              unitId = null;
            }
            this.client.getStartTimeMatrix(
              this.date,
              this.date,
              this.eventId,
              unitId,
              this.qty,
              function (data) {
                var times = data[instance.date];
                if (times) {
                  jQuery("#busy").hide();
                  for (var i = 0; i < times.length; i++) {
                    jQuery("#time").append(
                      '<div class="time-item col-sm-6" data-time="' +
                        times[i] +
                        '">' +
                        times[i] +
                        "</div>"
                    );
                  }
                } else {
                  jQuery("#busy").show();
                }
              }
            );
          }
        },

        getParam: function (param, defaultValue) {
          if (jQuery.type(this.options[param]) != "undefined") {
            return this.options[param];
          }
          return defaultValue;
        },

        error: function (error) {
          alert(error);
        },
      });

      var scheduler = new Scheduler();
    });
  },
};
</script>
<style scoped>
section {
  /* background: #0d0d0d; */
  background: white;
}
</style>
