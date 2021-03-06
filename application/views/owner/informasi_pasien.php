<style type="text/css">
  font {
    font-weight: bold;
    font-size: 20px;
    /*text-transform: uppercase;*/
  }

  .periksa {
    margin-left: 15px;
    text-align: center;
    color: white;
    background-color: #F40049;
    border-radius: 5px;
  }

  .daftar1 {
    text-align: center;
    padding: 9px 6px 9px 6px;
    font-size: 13px;
    margin-left: 15px;
    color: #000;
    background-color: #FFFF00;
    border-radius: 5px;
  }

  .daftar2 {
    text-align: center;
    padding: 9px 6px 9px 6px;
    font-size: 13px;
    margin-left: 15px;
    color: #fff;
    background-color: #00b050;
    border-radius: 5px;
  }

  thead {
    text-align: center;
  }

  .box2 select {
    background-color: white;
    color: black;
    /* width: 250px; */
    font-size: 16px;
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }

  .box2::before {
    content: "\f13a";
    font-family: FontAwesome;
    position: absolute;
    background-color: #0563af;
    top: 0;
    right: 0;
    width: 10%;
    /* height: 70%; */
    text-align: center;
    font-size: 18px;
    line-height: 34px;
    color: rgba(255, 255, 255);
    background-color: #F40049;
    pointer-events: none;
    border-radius: 0 15% 15% 0;
  }

  .box2:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: #F40049;
  }

  .box2 select option {
    /* padding: 30px; */
  }

  @media only screen and (max-width: 1024px) {
    .daftar2 {
      margin-left: 8px;
      font-size: 12px;
      padding: 0 10px 0 10px;
    }

    .daftar1 {
      margin-left: 8px;
      font-size: 12px;
      padding: 0 10px 0 10px;
    }

    .periksa {
      margin-left: 15px;
      text-align: center;
      padding-right: 23px;
      font-size: 12px;
    }

    font {
      font-size: 18px;
    }

    table {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 768px) {
    .daftar2 {
      margin-left: 0px;
      font-size: 12px;
      padding: 0 10px 0 10px;
    }

    .daftar1 {
      margin-left: 0px;
      font-size: 12px;
      padding: 0 10px 0 10px;
    }

    .periksa {
      margin-left: 0px;
      text-align: center;
      padding-right: 10px;
    }
  }

  @media only screen and (max-width: 425px) {
    .col-lg-12 {
      width: 90%;
      top: -44px;
      margin-left: 33px;
    }

    font {
      font-size: 17px;
    }

    table {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 375px) {
    .col-lg-12 {
      width: 92%;
      top: -44px;
      margin-left: 33px;
    }
  }

  @media only screen and (max-width: 320px) {

    .daftar1,
    .daftar2 {
      font-size: 10px;
      padding: 2px 0 2px 0;
    }

    font {
      font-size: 13px;
    }
  }

  .dis-cur {
    cursor: no-drop;
  }
</style>
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="margin-top: 20px;">
  <div class="row">
    <div class="col-lg-9">
      <div class="panel panel-default">
        <div class="panel-body">
          <font>Infromasi Pasien</font><br><br>
          <div class="col-lg-12">
							
              <div class="col-lg-2">
                <input type="text" class="form-control" id="cari_nama" value="" placeholder="Cari Nama" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
              </div>
              <div class="col-lg-2">
                <input type="text" class="form-control" id="cari_tgl_lahir" value="" placeholder="Cari Tanggal Lahir" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                
              </div>
              <div class="col-lg-2">
                <input type="text" class="form-control" id="cari_rekam_medis" value="" placeholder="Cari No Rekam Medis" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
              </div>
            
              
            </div><br /><br />
          <table id="all_data_json" data-toggle="table" data-url="<?php echo base_url('Klinik/get_informasi_pasien'); ?>" data-show-refresh="false" data-show-toggle="false" data-show-columns="false" data-search="false" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="nama" data-sort-order="asc" data-toolbar="#toolbar">
            <thead>
              <tr>
                <th data-sortable="true" data-field="" data-formatter="runningFormatter" data-align="center">No.</th>
                <th data-field="nama_depan|nama_belakang" data-sortable="true" data-align="center" data-formatter="namaPasien">Nama Pasien</th>
                <th data-field="tanggal_lahir" data-sortable="true" data-align="center">Tanggal Lahir</th>
                <th data-field="id_rekam_medis" data-sortable="true" data-align="center">No Rekam Medis</th>
                <th data-field="tanggal_rencana" data-sortable="true" data-align="center">Pemeriksaan Terakhir</th>
                <th data-field="id_pasien|id_booking|id_rekam_medis" data-align="center" data-formatter="aksi">Activity</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-3" style="background-color:  #f2f2f2; padding:0px;height: auto;">
      <div class="col-md-12" style="padding-right: 0px;">
        <br>
        <div class="row col-md-12">
          <div class="col-md-3" style="padding: 0px;"><b>Filter :</b></div>
          <div class="col-md-9" style="top: -7px; padding: 0">
            <div class="form-group box2">
              <input class="form-control" rows="3" autocomplete="off" name="tanggal_informasi" placeholder="filter tanggal" id="f_tanggal_informasi">
              <?php
              foreach ($informasi->result_array() as $rencana_result) {
                $tgl_rencana[] = $rencana_result['tanggal_rencana'];
              }
              $f_tgl_rencana = json_encode($tgl_rencana);
              // echo $f_tgl_rencana;
              ?>
            </div>
          </div>
        </div>
        <div id="txtfilter" style="width: 100%; height: 700px; overflow-y: scroll; overflow-x: hidden; margin-top:30px">
        </div>
        <input type="hidden" id="hidden">

      </div>

    </div>
  </div><!-- /.row -->
</div>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script>
  var base_url = '<?php echo base_url()?>';
  function runningFormatter(value, row, index) {
    return index + 1;
  }

  function proses(value) {
    return '<a href="#" onclick="prosesAntri(' + value + ')" class="btn btn-warning">Pilih</a>';
  }

  function prosesAntri(id) {
    $("#formProsesAntri").attr("action", "<?php echo base_url(); ?>antrian/create_action/" + id);
    $('#alertAntri').modal('show');
  }

  function namaPasien(value, row, index){
    return row.nama_depan+' '+row.nama_belakang;
  }

  function aksi(value, row, index){
    return '<a href="'+base_url+'owner/detail_informasi_pasien/' +row.id_pasien +'/' + row.id_booking + '/' + row.id_rekam_medis+'.html" class="btn btn-anim" style="height: 35px; width: 70px; background-color: #f40049; color: white; border-radius: 5px"><span> Lihat</span></a>';
  }

  function cari_data2(){
			var cari_nama = $("#cari_nama").val();
			var cari_tgl_lahir = $("#cari_tgl_lahir").val();
			var cari_rekam_medis = $("#cari_rekam_medis").val();

			$('#all_data_json').bootstrapTable('refresh', {url: '<?php echo base_url()?>Klinik/get_informasi_pasien2/' +  (cari_nama != ""? cari_nama : '0') +'/'+(cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+ (cari_rekam_medis != ""? cari_rekam_medis : '0') });
	}
</script>

<script type="text/javascript">
  //      $('#closemodal').click(function() {
  //     $('#ModalTolak').modal('hide');
  // });
  $(".remove").click(function() {
    var id = $(this).parents("tr").attr("id");

    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          $.ajax({
            url: '/item-list/' + id,
            type: 'DELETE',
            error: function() {
              alert('Something is wrong');
            },
            success: function(data) {
              $("#" + id).remove();
              swal("Deleted!", "Your imaginary file has been deleted.", "success");
            }
          });
        } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });

    // $('#ModalTolak').modal('hide');
  });

  $(document).ready(function() {
    pasien();
    $('#f_tanggal_informasi').change(function() {
      // let a = $(this).val();
      // console.log(a);
      pasien();
    });
  });

  function pasien() {
    var tgl = $('#f_tanggal_informasi').val();
    var id_dokter = $("#hidden_dokter_id").val();
    $.ajax({
      url: "<?= base_url('owner/filter_informasi_pasien') ?>",
      data: {
        tgl: tgl,
        id_dokter: id_dokter
      },
      success: function(data) {
        $('#txtfilter').html(data);
        $('#hidden').val(id_dokter);
      }
    });
  }
  //Filter tanggal Informasi Pasien
  var enableDays = <?php echo $f_tgl_rencana ?>;

  function enableAllTheseDays(date) {
    var sdate = $.datepicker.formatDate('yy-mm-dd', date)
    if ($.inArray(sdate, enableDays) != -1) {
      return [true];
    }
    return [false];
  }
  $('#f_tanggal_informasi').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    beforeShowDay: enableAllTheseDays,
    monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    dayNamesMin: ['Min', 'Sen', 'Sel', 'Rab', 'Ka', 'Jum', 'Sab'],
    dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    onSelect: function(dateText, inst) {
      var id_dokter = $("#hidden").val();
      var tanggal = dateText;
      var tgl = dateText;
      $.ajax({
        url: "<?= base_url('owner/filter_informasi_pasien') ?>",
        async: true,
        data: {
          tgl: tgl,
          id_dokter: id_dokter
        },
        success: function(data) {
          $('#txtfilter').html(data);
          $('#hidden').val(id_dokter);
        }
      });
    }
  });
</script>