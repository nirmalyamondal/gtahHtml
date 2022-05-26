
          // if (datefield.type!="date"){ 
          jQuery(function ($) {
            $('#deadline').datepicker({
              dateFormat: 'dd-mm-yy',
              numberOfMonths: 1,
              minDate: 0
            });
            $('#deadline').change(function () {
              function formatAMPM(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + '' + ampm;
                return strTime;
              }

              function toDate(dateStr) {
                var parts = dateStr.split("-");
                return new Date(parts[2], parts[1] - 1, parts[0]);
              }
              var date = $('#deadline').val();
              var f = toDate(date);
              //alert(f);
              var hours = f.getHours();
              var minutes = f.getMinutes();

              time_plus_12 = new Date(f.getTime() + 0 * 3600 * 1000);
              $('#deadlinetime').timepicker({
                'step': 15,
                'forceRoundTime': true,
                'timeFormat': 'H:i',
                'disableTimeRanges': [
                  [0, formatAMPM(time_plus_12)]
                ]
              });

              $('#deadlinetime').timepicker('setTime', time_plus_12);
              $('#deadlinetime').val('23:45');
            })
          });
        // }