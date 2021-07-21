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
		padding:9px 6px 9px 6px; 
		font-size: 13px;
		margin-left: 15px; 
		color: #000; 
		background-color: #FFFF00; 
		border-radius: 5px;
	}
	.daftar2{
		text-align:center; 
		padding:9px 6px 9px 6px; 
		font-size: 13px;
		margin-left: 15px; 
		color: #fff; 
		background-color: #00b050; 
		border-radius: 5px;
	}
	thead{
		text-align: center;
	}
	@media only screen and (max-width: 1024px) {
		.daftar2{
			margin-left: 8px;
			font-size: 12px;
			padding:  0 10px 0 10px;
		}
		.daftar1{
			margin-left: 8px;
			font-size: 12px;
			padding:  0 10px 0 10px;
		}
		.periksa{
			margin-left: 15px;
			text-align: center;	
			padding-right: 23px;
			font-size: 12px;
		}
		font{
			font-size: 18px;
		}
		table{
			font-size: 13px;
		}
	}
	@media only screen and (max-width: 768px) {
		.daftar2{
			margin-left: 0px;
			font-size: 12px;
			padding:  0 10px 0 10px;
		}
		.daftar1{
			margin-left: 0px;
			font-size: 12px;
			padding:  0 10px 0 10px;
		}
		.periksa{
			margin-left: 0px;
			text-align: center;	
			padding-right: 10px;
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
		.daftar1 ,.daftar2{
			font-size: 10px;
			padding: 2px 0 2px 0;
		}
		font{
			font-size: 13px;
		}
	}
	.dis-cur{
		cursor: no-drop;
	}
</style>
	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main" style="margin-top: 20px;">     
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-body">
						<font>Jadwal Pemeriksaan Hari Ini</font><br><br>
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
									<input type="text" class="form-control" id="cari_jam" value="" placeholder="Cari Jam Pemeriksaan" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
								</div>
								<div class="col-lg-2">
									<input type="text" class="form-control" id="cari_nama" value="" placeholder="Cari Nama" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
								</div>
								<div class="col-lg-2">
									<input type="text" class="form-control" id="cari_tgl_lahir" value="" placeholder="Cari Tanggal Lahir" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
									
								</div>
								<div class="col-lg-2">
									<input type="text" class="form-control" id="cari_rekam_medis" value="" placeholder="Cari No Rekam Medis" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
								</div>
								<div class="col-lg-2">
									<input type="text" class="form-control" id="cari_status" value="" placeholder="Cari Status" autocomplete="off" style="background: #fff;border: 1px solid #eee;color:#000;" onkeypress="cari_data2()">
								</div>
								
							</div><br /><br />
						<table id="all_data_json" data-url="<?php echo base_url('doctor/get_data_pemeriksaan');?>" data-toggle="table" data-show-refresh="false" data-show-toggle="false" data-show-columns="false" data-search="false" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="nama" data-sort-order="asc" data-toolbar="#toolbar">
							<thead >
								<tr>
									<th data-sortable="true" data-field="" data-formatter="runningFormatter" data-align="center" >No.</th>
									<th data-field="jam_rencana_mulai|jam_rencana_selesai" data-sortable="true" data-align="center" data-formatter="jamPeriksa">Jam Periksa</th>
									<th data-field="nama_depan|nama_belakang" data-sortable="true" data-align="center" data-formatter="namaPasien">Nama</th>
									<th data-field="tanggal_lahir" data-sortable="true" data-align="center">Tanggal Lahir</th>
									<th data-field="id_rekam_medis" data-sortable="true" data-align="center">No Rekam Medis</th>
									<th data-field="status" data-sortable="true" data-align="center" data-formatter="statusMedis">Status</th>
									<th data-field="id_pasien|id_rekam_medis|status" data-align="center" data-formatter="actionbutton">Activity</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div><!-- /.row -->
	</div>

	<script>
		var base_url = '<?php echo base_url()?>'; 
		function runningFormatter(value, row, index) {
			return index + 1;
		}

		function jamPeriksa(value, row, index){
			return row.jam_rencana_mulai+'-'+row.jam_rencana_selesai;
		}

		function namaPasien(value, row, index){
			return row.nama_depan+' '+row.nama_belakang;
		}

		function statusMedis(value, row, index){
			if(row.status == '0'){
				return '<div class="col-md-10 daftar1" data-toggle="modal"> Menunggu Pendaftaran</div>';
			}else if(row.status == '1'){
				return '<div class="col-md-10 daftar2" data-toggle="modal"> Sudah Terdaftar</div>';
			}	
		}

		function actionbutton(value, row, index){
			if(row.status == '0'){
				return '<a href="#" type="button" class="btn col-md-10" data-toggle="modal" style="margin-left: 20px; color: white; background-color: #F40049; border-radius: 5px; cursor: no-drop;"> Mulai Pemeriksaan</a>';
			}else{
				return '<a href="'+base_url+'doctor/get_periksa/'+row.id_pasien+'/'+row.id_rekam_medis+'" type="button" class="btn col-md-10" data-toggle="modal" style="margin-left: 20px; color: white; background-color: #F40049; border-radius: 5px; cursor: pointer;"> Mulai Pemeriksaan</a>'
			}
			
		}

		$("#filter_all").click(function () {
		
			cari_data($("#cari_jam").val(), $("#cari_nama").val(), $("#cari_tgl_lahir").val(), $("#cari_rekam_medis").val(),$("#cari_status").val(), $("#kode_booking_id").val());
		});

		function cari_data(cari_jam, cari_nama, cari_tgl_lahir, cari_rekam_medis, cari_status, kode_booking){
		

			$('#all_data_json').bootstrapTable('refresh', {url: '<?php echo base_url()?>Doctor/get_data_pemeriksaan2/' +  (cari_jam != ""? cari_jam : '0') +'/'+ (cari_nama != ""? cari_nama : '0') +'/'+(cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+ (cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_status != ""? cari_status : '0')  +'/'+ (kode_booking != ""?  kode_booking : '0') });
		}

		function cari_data2(){
			var cari_jam = $("#cari_jam").val();
			var cari_nama = $("#cari_nama").val();
			var cari_tgl_lahir = $("#cari_tgl_lahir").val();
			var cari_rekam_medis = $("#cari_rekam_medis").val();
			var cari_status = $("#cari_status").val();
			var kode_booking = $("#kode_booking_id").val();

			$('#all_data_json').bootstrapTable('refresh', {url: '<?php echo base_url()?>Doctor/get_data_pemeriksaan2/' +  (cari_jam != ""? cari_jam : '0') +'/'+ (cari_nama != ""? cari_nama : '0') +'/'+(cari_tgl_lahir != ""? cari_tgl_lahir : '0') +'/'+ (cari_rekam_medis != ""? cari_rekam_medis : '0') +'/'+ (cari_status != ""? cari_status : '0')  +'/'+ (kode_booking != ""?  kode_booking : '0') });
		}

		function proses(value) {
			return '<a href="#" onclick="prosesAntri(' + value + ')" class="btn btn-warning">Pilih</a>';
		}
		function prosesAntri(id) {
			$("#formProsesAntri").attr("action", "<?php echo base_url(); ?>antrian/create_action/" + id);
			$('#alertAntri').modal('show');
		}
	</script>

	<script type="text/javascript">
// 			$('#closemodal').click(function() {
//     $('#ModalTolak').modal('hide');
// });
$(".remove").click(function(){
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
				url: '/item-list/'+id,
				type: 'DELETE',
				error: function() {
					alert('Something is wrong');
				},
				success: function(data) {
					$("#"+id).remove();
					swal("Deleted!", "Your imaginary file has been deleted.", "success");
				}
			});
		} else {
			swal("Cancelled", "Your imaginary file is safe :)", "error");
		}
	});

        // $('#ModalTolak').modal('hide');
       });

      </script>
      	<!-- <script>
			var tm = new Date();
			var timst = tm.toLocaleTimeString();
			$.ajax({
			    url : "<?= base_url('doctor/get_periksa') ?>",
			    data : {jam_mulai:timst},
			    success:function(data){
			    	// console.log(data);
			      $('#txtgrand').html(data);
			    }
			  });
		</script> -->
