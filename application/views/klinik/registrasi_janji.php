<style type="text/css">
	font {
		font-weight: bold;
		font-size: 20px;
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
		padding: 7px 0 7px 0;
		margin-left: 15px;
		color: #000;
		background-color: #FFFF00;
		border-radius: 5px;
	}

	.daftar2 {
		text-align: center;
		padding: 7px 0 7px 0;
		margin-left: 15px;
		color: #fff;
		background-color: #00b050;
		border-radius: 5px;
	}

	thead {
		text-align: center;
	}

	@media only screen and (max-width: 1024px) {
		font {
			font-size: 18px;
		}

		table {
			font-size: 13px;
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
		font {
			font-size: 13px;
		}
	}
</style>

<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="margin-top: 20px;">
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-body">
					<font>Registrasi / Ubah Janji</font><br><br>
					<div class="col-sm-12">
						<div class="col-sm-3">
							<input type="text" class="form-control" id="kode_booking_id" placeholder="Masukkan Kode Booking">
						</div>
						<div class="col-sm-3">
							<button type="button"  class="btn salmon stil1" style="background-color:#f40049; color:white" id="filter_all">Cari</button>
						</div>
					</div><br /><br />
					<div class="col-lg-12">
                          <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_nama" value="" placeholder="Cari Nama Pasien" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
                          <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_tgl_lahir" value="" placeholder="Cari Tanggal Lahir" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
                          <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_rekam_medis" value="" placeholder="Cari No Rekam Medis" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
                          <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_dokter" value="" placeholder="Cari Dokter" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
						  <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_tgl" value="" placeholder="Cari Tanggal Pemeriksaan" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
						  <div class="col-lg-2">
                              <input type="text" class="form-control" id="cari_jam" value="" placeholder="Cari Jam Pemeriksaan" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
                          </div>
                    </div><br /><br />
					<table id="all_data_json_register" data-toggle="table" data-url="<?php echo base_url('Owner/get_register_janji2'); ?>"  data-show-refresh="false" data-show-toggle="false" data-show-columns="false" data-search="false" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="nama" data-sort-order="asc" data-toolbar="#toolbar">
						<thead>
							<tr>
								<th data-field="no_antrian" data-formatter="runningFormatter" data-align="right">No.</th>
								<th data-field="nama_depan|nama_belakang" data-sortable="true" data-formatter="namaPasien">Nama Pasien</th>
								<th data-field="tanggal_lahir" data-sortable="true">Tanggal Lahir</th>
								<th data-field="id_rekam_medis" data-sortable="true">No. Rekam Medis</th>
								<th data-field="nama_dokter" data-sortable="true">Dokter Pilihan</th>
								<th data-field="tanggal_rencana" data-sortable="true">Tanggal Periksa</th>
								<th data-field="jam_rencana_mulai|jam_rencana_selesai" data-sortable="true" data-formatter="JamPeriksa">Jam Periksa Pasien</th>
								<th data-field="id_pasien|id_booking" data-sortable="true" data-formatter="aksi">Activity / Actions</th>
							</tr>
						</thead>
					</table><br><br>

					<font>Registrasi / Ubah Janji Terlambat</font><br>
					<table id="all_data_json_ubah" data-toggle="table" data-url="<?php echo base_url('Owner/get_register_ubah_terlambat'); ?>" data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-search="true" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="nama" data-sort-order="asc" data-toolbar="#toolbar">
						<thead>
							<tr>
								<th data-field="no_antrian" data-formatter="runningFormatter" data-align="right">No.</th>
								<!--<th data-field="no_antrian"  data-sortable="true" data-align="right">No. Antrian</th>-->
								<th data-field="id_booking" data-sortable="true">Kode Booking</th>
								<th data-field="nama_depan|nama_belakang" data-sortable="true" data-formatter="namaPasien">Nama Pasien</th>
								<th data-field="tanggal_lahir" data-sortable="true">Tanggal Lahir</th>
								<th data-field="id_rekam_medis" data-sortable="true">No. Rekam Medis</th>
								<th data-field="nama_dokter" data-sortable="true">Dokter Pilihan</th>
								<th data-field="tanggal_rencana" data-sortable="true">Tanggal Periksa</th>
								<th data-field="jam_rencana_mulai|jam_rencana_selesai" data-sortable="true" data-formatter="JamPeriksa">Jam Periksa Pasien</th>
								<th data-field="id_pasien|id_booking" data-formatter="activity">Activity / Actions</th>
							</tr>
						</thead>


						
					</table>

				</div>
			</div>
		</div>
	</div>
</div>

<div id="modalUbahNew" class="modal" style="top: 100px;">
	<form class="form-horizontal" action="<?php echo base_url('owner/update_rencana/'); ?>" method="post" enctype="multipart/form-data" role="form">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="Batal_janji()">&times;</button>
														<h4 class="modal-title" style="text-align: center;"><b>Ubah Jadwal Pemeriksaan</b></h4>
													</div>
													<div class="col-lg-12">

														<div class="modal-body">
															<h3 class="madal-body">
																<center><span id="nama_depan"></span> <span id="nama_belakang"></span></center>
															</h3>
															<br>
															<div class="form-group">
																<label class="col-lg-3 col-sm-3 control-label">Tanggal</label>
																<div class="col-lg-3">
																	
																	<input type="text" class="form-control" name="tanggal_rencana" id="tanggal_rencana" readonly>
																</div>
																<div class="col-lg-6">
																	<input type="date" class="form-control" name="tanggal_rencana_date" id="tanggal_rencana_date" required>
																</div>
															</div>
															<br><br>
															<div class="form-group">
																<label class="col-lg-3 col-sm-3 control-label">Waktu</label>
																<div class="col-lg-9">
																	<span id="jam_rencana"></span>
																</div>
															</div>
														</div>

														<input type="hidden" class="form-control" id="id_rcn" name="id_rcn" >
														<input type="hidden" class="form-control" id="id_booking" name="id_booking" >
														<input type="hidden" class="form-control" id="id_dokter" name="id_dokter" >
														<input type="hidden" id="jam_rencana_mulai" name="jam_rencana_mulai">
                                            			<input type="hidden" id="jam_rencana_selesai" name="jam_rencana_selesai">
														<hr>
													</div>
													<div class="modal-footer">

														<button class="btn salmon" onclick="popUpBatalKonfirmasi()" style="background-color:#F40049; color:white" type="submit"> Ubah&nbsp;</button>
														<button type="button" class="btn btn-warning" data-dismiss="modal" onclick="Batal_janji()"> Batal</button>


													</div>

												</div>
											</div>
	</form>
</div>

<div id="myModal" class="modal" style="top: 100px;">
										<form class="form-horizontal" action="<?php echo base_url('owner/update_janji/'); ?>" method="post" enctype="multipart/form-data" role="form">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="Batal()">&times;</button>
														<h4 class="modal-title" style="text-align: center;"><b>Registrasi</b></h4>
													</div>
													<div class="col-lg-12">

														<div class="modal-body">
															<h3 class="madal-body">
																<center><span id="nama"></span></center>
															</h3>

															<h5>
																<center>dengan dokter <span id="nama_dokter"></span> di <span id="nama_cabang"></span></center>
															</h5>
															<h5>
																<center>pada tanggal <span id="tgl"></span> jam <span id="jam"></span></center>
															</h5>
															<br>
														</div>

														<input type="hidden" class="form-control" name="id_booking" id="id_booking_daftar" >
														<input type="hidden" class="form-control" name="id_rekam_medis" id="id_rekam_medis_daftar" >
														<input type="hidden" class="form-control" name="id_pasien" id="id_pasien_daftar" >
														<input type="hidden" class="form-control" name="id_dokter" id="id_dokter_daftar">
														<hr>
													</div>
													<div class="modal-footer">
														<button class="btn salmon" onclick="popUp()" style="background-color:#F40049; color:white" type="submit"> Daftar&nbsp;</button>
														<button type="button" class="btn btn-warning" data-dismiss="modal" onclick="Batal()"> Batal</button>
													</div>

												</div>
											</div>
										</form>
</div>

<div id="ModalUbahJanji" class="modal" style="top: 100px;">
										<form class="form-horizontal" action="<?php echo base_url('owner/update_rencana/'); ?>" method="post" enctype="multipart/form-data" role="form">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="Batal_janji2()">&times;</button>
														<h4 class="modal-title" style="text-align: center;"><b>Ubah Jadwal Pemeriksaan</b></h4>
													</div>
													<div class="col-lg-12">

														<div class="modal-body">
															<h3 class="madal-body">
																<center><span id="nama_orang"></span></center>
															</h3>
															<br>
															<div class="form-group">
																<label class="col-lg-3 col-sm-3 control-label">Tanggal</label>
																<div class="col-lg-3">
																	
																	<input type="text" class="form-control" name="tanggal_rencana" id="tanggal_rencana_janji" readonly>
																</div>
																<div class="col-lg-6">
																	<input type="date" class="form-control" name="tanggal_rencana" id="tanggal_rencana_date_janji" required>
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
																<div class="col-lg-9">
																	<span id="jam_rencana_janji"></span>
																</div>
															</div>
														</div>

														<input type="hidden" class="form-control" name="id_rcn" id="id_rcn_janji">
														<input type="hidden" class="form-control" name="id_booking" id="id_booking_janji">
														<input type="hidden" class="form-control" id="id_dokter_janji" name="id_dokter" >
														<input type="hidden" id="jam_rencana_mulai_janji" name="jam_rencana_mulai">
                                            			<input type="hidden" id="jam_rencana_selesai_janji" name="jam_rencana_selesai">
														<hr>
													</div>
													<div class="modal-footer">

														<button class="btn salmon" onclick="popUpBatalKonfirmasi()" style="background-color:#F40049; color:white" type="submit"> Ubah&nbsp;</button>
														<button type="button" class="btn btn-warning" data-dismiss="modal" onclick="Batal_janji2()"> Batal</button>


													</div>

												</div>
											</div>
										</form>
									</div>
<script>
	// $.getJSON('/calender/load_jadwal/'+start+'/'+dt, {
    // 	format: "json"
    // })
    // .done(function (data) {
	// });	
	var link = "<?php echo base_url() ?>";

	// $(document).ready(function(){
	// 	cari_data($("#cari_nama").val(), $("#cari_tgl_lahir").val(), $("#cari_rekam_medis").val(), $("#cari_dokter").val(),$("#cari_tgl").val(), $("#cari_jam").val(), $("#kode_booking_id").val());
	// });	

	function runningFormatter(value, row, index) {
		return index + 1;
	}

	function namaPasien(value, row, index){
		return row.nama_depan+'  '+row.nama_belakang;
	}

	function JamPeriksa(value, row, index){
		return row.jam_rencana_mulai+'-'+row.jam_rencana_selesai;
	}

	function aksi(value, row, index){
		return `
			<a href="#" type="button" class="btn col-md-6" onclick="daftar('${row.id_booking}')" style="text-align: center; color: white; background-color: #00b050; border-radius: 0px;">Daftar</a>
			<a href="#" class="btn col-md-6" onclick="ubah_jadwal('${row.id_booking}')" style="text-align: center; color: white; background-color: #c00000; border-radius: 0px;">Ubah</a>
		`;
	}

	function activity(value, row, index){
		return `
		<a href="#" type="button" onclick="ubah_jadwal_terlambat('${row.id_booking}')" class="btn col-md-12" style="text-align: center; color: white; background-color: #c00000; border-radius: 0px;">Ubah</a>
		`;
	}

	function daftar(id_booking){
		$('#myModal').show();
		let id_user_terima = '<?= $this->session->userdata("id_user") ?>';
		$.ajax({
				url : link+"Owner/ajax_get_daftar/"+id_booking,
				type: "GET",
				dataType: "JSON",
				success: function(result) {  
					$('#nama').html(result.nama_depan+' '+result.nama_belakang);
					$('#nama_dokter').html(result.nama_dokter);
					$('#nama_cabang').html(result.nama_cabang);
					$('#tgl').html(result.tanggal_rencana);
					$('#jam').html(result.jam_rencana_mulai+'-'+result.jam_rencana_selesai);
					$('#id_booking_daftar').val(result.id_booking);
					$('#id_rekam_medis_daftar').val(result.id_rekam_medis);
					$('#id_pasien_daftar').val(result.id_pasien);
					$('#id_dokter_daftar').val(result.id_dokter);

				}, error: function (jqXHR, textStatus, errorThrown) {
					alert('Error get data from ajax');
				}
		});
	}

	function ubah_jadwal_terlambat(id_booking){
		$('#ModalUbahJanji').show();
		let id_user_terima = '<?= $this->session->userdata("id_user") ?>';
		$.ajax({
				url : link+"Owner/ajax_get_ubah_terlambat/"+id_booking,
				type: "GET",
				dataType: "JSON",
				success: function(result) {  
					$('#nama_orang').html(result.nama_depan+' '+result.nama_belakang);
					$('#tanggal_rencana_janji').val(result.tanggal_rencana);
					$('#tanggal_rencana_date_janji').val(result.tanggal_rencana);
					$('#id_rcn_janji').val(result.id_rcn);
					$('#id_booking_janji').val(result.id_booking);
					$('#jam_mulai_selesai_janji').html(result.jam_rencana_mulai+'-'+result.jam_rencana_selesai);
					$('#id_dokter_janji').val(result.id_dokter);
					$('#jam_rencana_mulai_janji').val(result.jam_rencana_mulai);
					$('#jam_rencana_selesai_janji').val(result.jam_rencana_selesai);

					cek_waktu_booking_janji(result.id_booking, result.id_dokter, result.tanggal_rencana);

				}, error: function (jqXHR, textStatus, errorThrown) {
					alert('Error get data from ajax');
				}
		});
	}

	function Batal(){
		$('#myModal').hide();
	}

	function Batal_janji(){
		$('#modalUbahNew').hide();
	}

	function Batal_janji2(){
		$('#ModalUbahJanji').hide();
	}

	$("#filter_all").click(function () {
		
		cari_data($("#cari_nama").val(), $("#cari_tgl_lahir").val(), $("#cari_rekam_medis").val(), $("#cari_dokter").val(),$("#cari_tgl").val(), $("#cari_jam").val(), $("#kode_booking_id").val());
	});

	function cari_data(cari_nama, cari_tgl_lahir, cari_rekam_medis, cari_dokter, cari_tgl, cari_jam, kode_booking){
	

		$('#all_data_json_register').bootstrapTable('refresh', {url: '<?php echo base_url()?>Owner/get_register_janji/' +  (cari_nama != ""? cari_nama : '0') +'/'+ (cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+(cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_dokter != ""? cari_dokter : '0') +'/'+ (cari_tgl != ""? cari_tgl : '0') +'/'+(cari_jam != ""? cari_jam : '0') +'/'+ (kode_booking != ""?  kode_booking : '0') });
	}

	function cari_data2(){
		var cari_nama = $("#cari_nama").val();
		var cari_tgl_lahir = $("#cari_tgl_lahir").val();
		var cari_rekam_medis = $("#cari_rekam_medis").val();
		var cari_dokter = $("#cari_dokter").val();
		var cari_tgl = $("#cari_tgl").val();
		var cari_jam = $("#cari_jam").val();
		var kode_booking = $("#kode_booking_id").val();

		$('#all_data_json_register').bootstrapTable('refresh', {url: '<?php echo base_url()?>Owner/get_register_janji/' +  (cari_nama != ""? cari_nama : '0') +'/'+ (cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+(cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_dokter != ""? cari_dokter : '0') +'/'+ (cari_tgl != ""? cari_tgl : '0') +'/'+(cari_jam != ""? cari_jam : '0') +'/'+ (kode_booking != ""?  kode_booking : '0') });
	}

	function prosesRekamMedis(value) {
		return '<a href="<?php echo base_url(); ?>rekam_medis/create/' + value + '" class="btn btn-primary">Proses</a>';
	}

	function ubah_jadwal(id_pasien){
		$('#modalUbahNew').show();
		$.ajax({
			url: "<?= base_url() ?>" + "index.php/owner/show_ubah_janji/" + id_pasien,
			dataType: "JSON",
			success: function(data) {
				// $("#jam_rencana").html(data.output);
				// console.log(data);
				$('#nama_depan').html(data.nama_depan);
				$('#nama_belakang').html(data.nama_belakang);
				$('#tanggal_rencana').val(data.tanggal_rencana);
				$('#tanggal_rencana_date').val(data.tanggal_rencana);

				$('#id_rcn').val(data.id_rcn);
				$('#id_booking').val(data.id_booking);
				$('#id_dokter').val(data.id_dokter);
				$('#jam_rencana_mulai').val(data.jam_rencana_mulai);
				$('#jam_rencana_selesai').val(data.jam_rencana_selesai);

				cek_waktu_booking(data.id_booking, data.id_dokter, data.tanggal_rencana);
			}
		});
	}

	$("#tanggal_rencana_date").on("change", function() {
		cek_waktu_booking($('#id_booking').val(),$('#id_dokter').val(),$(this).val());
	});

	$("#tanggal_rencana_date").datepicker({
		monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
			'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
		],
		dayNamesMin: ['Min', 'Sen', 'Sel', 'Rab', 'Ka', 'Jum', 'Sab'],
		dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
		minDate: 0,
		firstDay: 0,
		// dateFormat: "DD, dd-mm-yy",
		dateFormat: "yy-mm-dd",
		// beforeShowDay: function(date) {
		// 	return [jadwal_dokter.indexOf(date.getDay()) > -1];
		// }
	}).datepicker("setDate", '0');

	function cek_waktu_booking(id_booking, id_dokter, tanggal_rencana) {
		//let split_tgl = val.split("/");
		let tgl = tanggal_rencana;

		$.ajax({
			url: "<?= base_url() ?>" + "index.php/owner/show_jadwal_dokter/" + id_booking + "/" + id_dokter + "/" + tgl,
			dataType: "JSON",
			success: function(data) {
				$("#jam_rencana").html(data.output);
				console.log(data);
			}
		});
	}

	function cek_jadwal(id_jadwal){
        console.log('coba');
		document.getElementById("jadwal"+id_jadwal).style.color = "white";
		document.getElementById("jadwal"+id_jadwal).style.background = "#f40049";

        $.ajax({
				url : link+"Owner/get_jadwal/"+id_jadwal,
				type: "GET",
				dataType: "JSON",
				success: function(result) {
					$('[name="jam_rencana_mulai"]').val(result.jam_mulai);
					$('[name="jam_rencana_selesai"]').val(result.jam_tutup);

				}, error: function (jqXHR, textStatus, errorThrown) {
					alert('Error get data from ajax');
				}
	    });
	}
</script>

<script>
	function popUpBatalKonfirmasi() {
		swal("Terkirim!", "Perubahan jadwal pemeriksaan pasien telah berhasil dilakukan", "success");
	}
</script>

<script>
	function popUp() {
		swal("Berhasil!", "Pasien telah terdaftar. Pasien dapat segera dipersilahkan masuk ke ruang pemeriksaan", "success");
		// swal({
		// 		title: "Are you sure?",
		// 		text: "Once deleted, you will not be able to recover this imaginary file!",
		// 		icon: "warning",
		// 		buttons: true,
		// 		dangerMode: true,
		// 	})
		// 	.then((willDelete) => {
		// 		if (willDelete) {
		// 			swal("Poof! Your imaginary file has been deleted!", {
		// 				icon: "success",
		// 			});
		// 		} else {
		// 			swal("Your imaginary file is safe!");
		// 		}
		// 	});
	}
</script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>