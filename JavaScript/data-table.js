
          $(document).ready(function () {
            var table = $('#example').DataTable({
              "columnDefs": [
                { "visible": false, "targets": 2 }
              ],
              "order": [[2, 'asc']],
              "displayLength": 25,
              "drawCallback": function (settings) {
                var api = this.api();
                var rows = api.rows({ page: 'current' }).nodes();
                var last = null;

                api.column(2, { page: 'current' }).data().each(function (group, i) {
                  if (last !== group) {
                    $(rows).eq(i).before(
                      '<tr class="group"><td colspan="5">' + group + '</td></tr>'
                    );

                    last = group;
                  }
                });
              }
            });

            // Order by the grouping
            $('#example tbody').on('click', 'tr.group', function () {
              var currentOrder = table.order()[0];
              if (currentOrder[0] === 2 && currentOrder[1] === 'asc') {
                table.order([2, 'desc']).draw();
              }
              else {
                table.order([2, 'asc']).draw();
              }
            });
            $('#default').click();
          });

          function ajax_status_change(formID, UrlPath, uniqId) {


            var statusValue = $("#" + formID).find('#status').val();
            var fd = new FormData(document.getElementById(formID));
            fd.append("statusChange", formID);
            $.ajax({
              url: UrlPath,
              type: "POST",
              data: fd,
              processData: false,  // tell jQuery not to process the data
              contentType: false   // tell jQuery not to set contentType
            }).done(function (data) {
              console.log(data);
              if (data == 'success_status') {
                if (statusValue == '1') {
                  $("#" + formID).find("#status").val('0');
                  $("#" + formID).find('#statusBtn').html('<input type="submit" class="btn btn-danger" value="Deactive">');

                } else {
                  $("#" + formID).find('#status').val('1');
                  $("#" + formID).find('#statusBtn').html('<input type="submit" class="btn btn-success" value="Active">');
                }
                //alert('Status updated successfully');

              } else {
                alert('Status Not updated');
              }



            });
            return false;

          }
          function ajax_delete_row(formID, UrlPath, uniqId) {
            var fd = new FormData(document.getElementById(formID));
            fd.append("deleteRecord", formID);
            if (confirm("Are you sure you want to delete this page")) {
              $.ajax({
                url: UrlPath,
                type: "POST",
                data: fd,
                processData: false,  // tell jQuery not to process the data
                contentType: false   // tell jQuery not to set contentType
              }).done(function (data) {
                console.log(data);
                alert(data);
                $('#' + uniqId).hide();


              });
            } else {

              return false;
            }
            return false;

          }
          function ajax_restore_row(formID, UrlPath, uniqId) {
            var fd = new FormData(document.getElementById(formID));
            fd.append("deleteRecord", formID);
            if (confirm("Are you sure you want to restore this page")) {
              $.ajax({
                url: UrlPath,
                type: "POST",
                data: fd,
                processData: false,  // tell jQuery not to process the data
                contentType: false   // tell jQuery not to set contentType
              }).done(function (data) {
                console.log(data);
                alert(data);
                $('#' + uniqId).hide();


              });
            } else {

              return false;
            }
            return false;

          }
          function ajax_permanent_delete_row(formID, UrlPath, uniqId) {
            var fd = new FormData(document.getElementById(formID));
            fd.append("deleteRecord", formID);
            if (confirm("Are you sure you want to delete this page permanently")) {
              $.ajax({
                url: UrlPath,
                type: "POST",
                data: fd,
                processData: false,  // tell jQuery not to process the data
                contentType: false   // tell jQuery not to set contentType
              }).done(function (data) {
                console.log(data);
                alert(data);
                $('#' + uniqId).hide();


              });
            } else {

              return false;
            }
            return false;

          }