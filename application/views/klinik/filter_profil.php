<?php 
if (!empty($janji_datang)) {
      foreach ($janji_datang as $result) : 
        $jam = $result->jam_mulai . '-' . $result->jam_tutup;
        $a = 0;
        $b = 1;
        $a++;
        if ($result->jam_rencana_mulai.'-'.$result->jam_rencana_selesai == $jam) {
            if ($a <= $b) { ?>
            <div class="timeline">
              <div class="entry">
                <div class="title">
                  <font style="text-align: right;">
                    <?php $namahari = date('l', strtotime($result->tanggal_rencana)); ?>
                    <?php
                    switch ($namahari) {
                      case 'Sunday':
                        $hari_ini = "Minggu";
                        break;

                      case 'Monday':
                        $hari_ini = "Senin";
                        break;

                      case 'Tuesday':
                        $hari_ini = "Selasa";
                        break;

                      case 'Wednesday':
                        $hari_ini = "Rabu";
                        break;

                      case 'Thursday':
                        $hari_ini = "Kamis";
                        break;

                      case 'Friday':
                        $hari_ini = "Jumat";
                        break;

                      case 'Sataturday':
                        $hari_ini = "Sabtu";
                        break;

                      default:
                        $hari_ini = "Tidak di ketahui";
                        break;
                    }
                    ?>
                    <p><?php echo $hari_ini ?></p>
                    <?php $tgl = date('d M', strtotime($result->tanggal_rencana)); ?>
                    <h3><b><?php echo $tgl ?></b></h3>
                    <p><?php echo $result->jam_mulai ?>-<?php echo $result->jam_tutup ?></p>
                  </font>
                </div>
                <div class="body">
                  <p style="font-size: 12px;"><i>
                      <?php
                      $awal  = strtotime($result->tanggal_rencana . $result->jam_mulai);
                      $akhir = time();
                      $diff  = $akhir - $awal;
                      $jam   = floor($diff / (60 * 60));
                      $menit = $diff - $jam * (60 * 60);
                      if ($akhir > $awal) {
                        echo 'Terlambat: ' . $jam .  ' jam, ' . floor($menit / 60) . ' menit';
                      } else {
                        // echo 'Waktu Tersisa tinggal: ' . $jam .  ' jam, ' . floor( $menit / 60 ) . ' menit';
                      }
                      ?>
                    </i></p>
                    <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
                    <div class="form-group">

                        <?php if ($result->konfirmasi == '0') { ?>
                        <font style="background-color: yellow; color: black; padding: 5px" size="2px">
                            Belum terkonfirmasi </font>
                        <?php } elseif ($result->konfirmasi == '2') { ?>
                        <font style="background-color: red; color: black; padding: 5px" size="2px">
                            Booking Ditolak</font>
                        <?php } else { ?>
                        <font style="background-color: lightgreen; color: black; padding: 5px" size="2px">
                            Sudah terkonfirmasi</font>
                        <?php } ?>
                        <font size="2px"> <a href="#" onclick="janji_datang('<?php echo $result->id_booking ?>')" style=" color: salmon; padding: 5px; margin-top: 10px; float: left;"> Lihat/Ubah Rencana </a></font>  
                    </div>    
                </div>    
              </div>
            </div>  
            <?php }
        } ?>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }     
    ?>  

<div id="myModalJanji" class="modal" style="top: 50px;">
                      <form class="form-horizontal" action="<?php echo base_url('klinik/update_rencana_h_profil/'); ?>" method="post" enctype="multipart/form-data" role="form">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="Batal_janji()">&times;</button>
                              <h4 class="modal-title" style="text-align: center;"><b>Janji yang akan datang</b></h4>
                            </div>
                            
                              <div class="modal-body">
                                <input type="hidden" id="id_booking_2" name="id_booking"> 
                                <input type="hidden" id="id_dokter_2" name="id_dokter2"> 
                                <h3 >
                                  <center><span id="nama_lengkap_janji"></span></center>
                                </h3>
                               <br />
                               <div id="pertama">
                                    <span id="status"></span>
                                    <br>
                                    <br>
                                    <div class="form-group">
                                        <label class="col-lg-3 col-sm-3 control-label">Nama Dokter</label>
                                        <div class="col-lg-9">
                                            <div id="show_dokter"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-lg-3 col-sm-3 control-label">Nama Cabang</label>
                                        <div class="col-lg-9">
                                            <div id="show_cabang"></div>
                                        </div>
                                    </div>  
                                    <div class="form-group">
                                        <label class="col-lg-3 col-sm-3 control-label">Tanggal</label>
                                        <div class="col-lg-3">
                                          <input type="text" id="tanggal_rencana" class="form-control" name="tanggal_rencana"  readonly>
                                        </div>
                                        <div class="col-lg-6">
                                          <input type="date" id="tanggal_rencana_2" class="form-control" name="tanggal_rencana" >
                                        </div>
                                    </div>
                                    <div class="form-group">
										<label class="col-lg-3 col-sm-3 control-label">Jam Periksa</label>
										<div class="col-lg-3">
											<button class="btn salmon" style="background-color:#F40049; color:white" > <p style="color:white;" id="jam_mulai_selesai_janji"></p></button>
										</div>
									</div>
                                    <div class="form-group">
                                            <label class="col-lg-3 col-sm-3 control-label">Waktu</label>
                                            <input type="hidden" id="jam_rencana_mulai_janji" name="jam_rencana_mulai">
                                            <input type="hidden" id="jam_rencana_selesai_janji" name="jam_rencana_selesai">
                                            <div class="col-lg-9">
                                            <span id="jam_rencana_janji"></span>
                                            </div>
                                    </div>  
                               </div>
                               <div id="kedua">
                                  <h5>
                                        <center>dengan dokter <span id="nama_lengkap_2"></span></center>
                                  </h5>
                                  <h5>
                                      <center>pada tanggal <span id="tgl_rencana"></span> jam <span id="jam_rencana"></span></center>
                                  </h5>
                                  <br>
                                    <center>
                                      <font style="background-color: lightgreen; color: black; padding: 5px;">
                                        Sudah Terdaftar</font>
                                    </center>
                                  <br>
                                  <p>
                                    <center>Kode Booking:</center>
                                  </p>
                                  <b>
                                      <h4 class="madal-title">
                                        <center><span id="booking_id"></span></center>
                                      </h4>
                                  </b>
                                  <h6>
                                      <center>Tunjukkan kode booking ini pada saat registrasi di klinik kami</center>
                                  </h6>
                                  <h6>
                                      <center>Sampai Berjumpa</center>
                                  </h6>

                                  <br>
                               </div>
                              </div>
                              <input type="hidden" class="form-control" name="id_rcn" id="id_rcn_input">
                              <input type="hidden" class="form-control" name="id_booking" id="id_booking_input">  
                              <!-- <input type="hidden" class="form-control" name="id_rcn" value="<?php echo $result->id_rcn ?>">
                              <input type="hidden" class="form-control" name="id_booking" value="<?php echo $result->id_booking ?>"> -->
                             
                            <div class="modal-footer">
                                <span id="button_footer"></span>
                            </div>

                          </div>
                        </div>
                      </form>
</div>    
<script>
function janji_datang(id_booking){
    $('#myModalJanji').show();
    $.ajax({
			url: "<?= base_url() ?>" + "Owner/show_ubah_janji_akan_datang_2/" + id_booking,
			dataType: "JSON",
			success: function(data) {
                $('#nama_lengkap_janji').html(data.nama_depan+' '+data.nama_belakang);
                $('#jam_mulai_selesai_janji').html(data.jam_rencana_mulai+'-'+data.jam_rencana_selesai);
                if(data.konfirmasi=='0' || data.konfirmasi=='2'){
                    if(data.konfirmasi=='0'){
                        $('#status').html('<font style="background-color: yellow; color: black; padding: 5px; float: right;"> Belum terkonfirmasi </font>');
                    }else{
                        $('#status').html(`
                            <p>
                                <center>alasan ditolak:</center>
                            </p>
                            <h5>
                                <center>${dara.alasan_ditolak}</center>
                            </h5><br>
                            <h6>
                            <center>Silahkan menjadwalkan ulang di bawah ini</center>
                            </h6><br>
                            <font style="background-color: red; color: black; padding: 5px; float: right;">Booking Ditolak</font>
                        `); 
                    }

                    var okey = '<select name="id_dokter" class="form-control">';

                    $.getJSON('<?php echo base_url(); ?>Owner/get_dokter/', {
                        format: "json"
                    }).done(function (data) {
                        $.each(data, function (key, val) {
                                    if(data.id_dokter==val.id_dokter){
                                        okey += '<option value="' + val.id_dokter + '" selected >' + val.nama_dokter + '</option>';
                                    }else{
                                        okey += '<option value="' + val.id_dokter + '" >' + val.nama_dokter + '</option>';
                                    }
                                    
                        });
                        okey += '</select>';
                            // console.log(okey);
                        var f = document.getElementById("show_dokter");
                        f.innerHTML= okey;
                        document.getElementById('show_dokter').style.display = "block";
                    })

                    var cabang = '<select name="id_cabang" class="form-control">';

                    $.getJSON('<?php echo base_url(); ?>Owner/get_cabang/', {
                        format: "json"
                    }).done(function (data) {
                        $.each(data, function (key, val) {
                                    if(data.id_cabang==val.id_cabang){
                                        cabang += '<option value="' + val.id_cabang + '" selected >' + val.nama_cabang + '</option>';
                                    }else{
                                        cabang += '<option value="' + val.id_cabang + '" >' + val.nama_cabang + '</option>';
                                    }
                                    
                        });
                        cabang += '</select>';
                            // console.log(okey);
                        var g = document.getElementById("show_cabang");
                        g.innerHTML= cabang;
                        document.getElementById('show_cabang').style.display = "block";
                    })

                    $('#tanggal_rencana').val(data.tanggal_rencana);
                    $('#tanggal_rencana_2').val(data.tanggal_rencana);
                    $('#id_booking_2').val(data.id_booking);
                    $('#id_dokter_2').val(data.id_dokter);

                    cek_waktu_booking_janji(data.id_booking, data.id_dokter, data.tanggal_rencana);

                    $('#button_footer').html(`
            
                        <button class="btn" style="background-color:salmon; color:white" type="submit"> Ubah&nbsp;</button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal" onclick="Batal_janji()"> Batal</button>
                    `);

                    document.getElementById('pertama').style.display = "block";
                    document.getElementById('kedua').style.display = "none";
                }else{
                    $('#nama_lengkap_2').html(data.nama_dokter+' di '+data.nama_cabang);
                    $('#tgl_rencana').html(data.tanggal_rencana);
                    $('#jam_rencana').html(data.jam_rencana_mulai+'-'+data.jam_rencana_selesai);
                    $('#booking_id').html(data.id_booking);

                    $('#button_footer').html(`
                    
                        <button type="button" class="btn btn-warning" data-dismiss="modal" onclick="Batal_janji()"> Kembali</button>
                    `);
                    document.getElementById('pertama').style.display = "none";
                    document.getElementById('kedua').style.display = "block";
                }
                $('#id_rcn_input').val(data.id_rcn);
                $('#id_booking_input').val(data.id_booking);
            }
	});    
}

$("#tanggal_rencana_2").on("change", function() {
		cek_waktu_booking_janji($('#id_booking_2').val(),$('#id_dokter_2').val(),$(this).val());
});


function cek_waktu_booking_janji(id_booking, id_dokter, tanggal_rencana) {
		//let split_tgl = val.split("/");
		let tgl = tanggal_rencana;

		$.ajax({
			url: "<?= base_url() ?>" + "Owner/show_jadwal_dokter_janji/" + id_booking + "/" + id_dokter + "/" + tgl,
			dataType: "JSON",
			success: function(data) {
				$("#jam_rencana_janji").html(data.output);
				console.log(data);
			}
		});
}

function cek_jadwal_janji(id_jadwal){
        console.log('coba');
		document.getElementById("jadwal_janji"+id_jadwal).style.color = "white";
		document.getElementById("jadwal_janji"+id_jadwal).style.background = "#f40049";

        $.ajax({
				url : "<?= base_url() ?>"+"Owner/get_jadwal/"+id_jadwal,
				type: "GET",
				dataType: "JSON",
				success: function(result) {
					$('#jam_rencana_mulai_janji').val(result.jam_mulai);
					$('#jam_rencana_selesai_janji').val(result.jam_tutup);

				}, error: function (jqXHR, textStatus, errorThrown) {
					alert('Error get data from ajax');
				}
	    });
}

function Batal_janji(){
  $('#myModalJanji').hide();
}
</script>    