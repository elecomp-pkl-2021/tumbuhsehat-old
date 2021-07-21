<style type="text/css">
	font{
		font-weight: bold; 
		font-size: 20px;
	}
	.periksa{
		margin-left: 15px; 
		text-align: center;
		color: white; 
		background-color: #F40049; 
		border-radius: 5px;
	}
	.daftar1{
		text-align:center; 
		padding:7px 0 7px 0; 
		margin-left: 15px; 
		color: #000; 
		background-color: #FFFF00; 
		border-radius: 5px;
	}
	.daftar2{
		text-align:center; 
		padding:7px 0 7px 0; 
		margin-left: 15px; 
		color: #fff; 
		background-color: #00b050; 
		border-radius: 5px;
	}
	thead{
		text-align: center;
	}
	@media only screen and (max-width: 1024px) {
		font{
			font-size: 18px;
		}
		table{
			font-size: 13px;
		}
	}
	@media only screen and (max-width: 425px) {
		.col-lg-12{
			width: 90%;
			top: -44px;
			margin-left: 33px;
		}
		font{
			font-size: 17px;
		}
		table{
			font-size: 12px;
		}
	}
	@media only screen and (max-width: 375px) {
		.col-lg-12{
			width: 92%;
			top: -44px;
			margin-left: 33px;
		}
	}
	@media only screen and (max-width: 320px) {
		font{
			font-size: 13px;
		}
	}
</style>

	<div class="cd-content-wrapper">
		<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="margin-top: 20px;">     
			<div class="row">
				<div class="col-lg-12">
					<div class="panel panel-default">
						<div class="panel-body">
							<font>Pembayaran</font><br><br>
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
							<table id="all_data_json" data-toggle="table" data-url="<?php echo base_url('owner/get_data_pembayaran');?>" data-show-refresh="false" data-show-toggle="false" data-show-columns="false" data-search="false" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="nama" data-sort-order="asc" data-toolbar="#toolbar">
								<thead>
									<tr>
										<th data-field="no_antrian" data-formatter="runningFormatter" data-align="right">No.</th>
										<th data-field="nama_depan|nama_belakang" data-sortable="true" data-formatter="namaPasien">Nama Pasien</th>
										<th data-field="tanggal_lahir" data-sortable="true">Tanggal Lahir</th>
										<th data-field="id_rekam_medis" data-sortable="true">No. Rekam Medis</th>
										<th data-field="nama_dokter" data-sortable="true">Dokter Pilihan</th>
										<th data-field="tanggal_rencana" data-sortable="true">Tanggal Periksa</th>
										<th data-field="jam_rencana_mulai|jam_rencana_selesai" data-sortable="true" data-formatter="jamPeriksa">Jam Periksa</th>
										<th data-field="id_booking|id_rekam_medis" data-sortable="true" data-formatter="action">Activity</th>
									</tr>
								</thead>
								
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>
	

	<script>
		function runningFormatter(value, row, index) {
			return index+1;
		}
		function prosesRekamMedis(value){
			return '<a href="<?php echo base_url();?>rekam_medis/create/'+value+'" class="btn btn-primary">Proses</a>';
		}

		function namaPasien(value, row, index){
			return row.nama_depan+' '+row.nama_belakang;
		}

		function jamPeriksa(value, row, index){
			return row.jam_rencana_mulai+'-'+row.jam_rencana_selesai;
		}

		function action(value, row, index){
			return '<a href="<?php echo base_url();?>owner/metode_bayar/'+row.id_booking+'/'+row.id_rekam_medis+'.html" class="btn btn-success col-md-12"  style="text-align: center; color: white; background-color: #00b050; border-radius: 0px;">Proses Bayar</a>';
		}

		$("#filter_all").click(function () {
		
			cari_data($("#cari_nama").val(), $("#cari_tgl_lahir").val(), $("#cari_rekam_medis").val(), $("#cari_dokter").val(),$("#cari_tgl").val(), $("#cari_jam").val(), $("#kode_booking_id").val());
		});

		function cari_data(cari_nama, cari_tgl_lahir, cari_rekam_medis, cari_dokter, cari_tgl, cari_jam, kode_booking){
		

			$('#all_data_json').bootstrapTable('refresh', {url: '<?php echo base_url()?>Owner/get_data_pembayaran2/' +  (cari_nama != ""? cari_nama : '0') +'/'+ (cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+(cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_dokter != ""? cari_dokter : '0') +'/'+ (cari_tgl != ""? cari_tgl : '0') +'/'+(cari_jam != ""? cari_jam : '0') +'/'+ (kode_booking != ""?  kode_booking : '0') });
		}

		function cari_data2(){
			var cari_nama = $("#cari_nama").val();
			var cari_tgl_lahir = $("#cari_tgl_lahir").val();
			var cari_rekam_medis = $("#cari_rekam_medis").val();
			var cari_dokter = $("#cari_dokter").val();
			var cari_tgl = $("#cari_tgl").val();
			var cari_jam = $("#cari_jam").val();
			var kode_booking = $("#kode_booking_id").val();

			$('#all_data_json').bootstrapTable('refresh', {url: '<?php echo base_url()?>Owner/get_data_pembayaran2/' +  (cari_nama != ""? cari_nama : '0') +'/'+ (cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+(cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_dokter != ""? cari_dokter : '0') +'/'+ (cari_tgl != ""? cari_tgl : '0') +'/'+(cari_jam != ""? cari_jam : '0') +'/'+ (kode_booking != ""?  kode_booking : '0') });
		}
	</script>   
