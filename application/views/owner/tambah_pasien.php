<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- <link rel="stylesheet" href="<?php echo base_url() ?>assets/kode_tel/build/css/intlTelInput.css">
<link rel="stylesheet" href="<?php echo base_url() ?>assets/kode_tel/build/css/demo.css"> -->
<!-- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
<style type="text/css">
	.input {
		margin-top: 50px;
	}
</style>
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">

	<div class="row">
		<div class="col-lg-12">
		</div>
	</div>
	<!--/.row-->
	<br>


	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-body">
					<font style="font-weight: bold; font-size: 15px; padding-left: 27px">Buat Janji Pemeriksaan <i class="fa fa-chevron-right" aria-hidden="true"></i> Buat Akun Keluarga</font><br><br>
					<!-- <form action="<?php echo base_url('klinik/add_pasien/'); ?>" method="post"> -->
					<div class="form-group">
					<form id="formAksi">
						<div class="form-group">																				
							<div class="col-md-12">
								<div class="col-lg-12" style="margin-bottom: 15px"><b>Informasi Umum</b></div><br>
								<div class="col-lg-2">	
									Nama Depan 
								</div>
								<div class="col-lg-4">	
									<div class="form-group">	
										<input type="text" class="form-control" rows="3" name="nama_depan" id="nama_depan" required="required" autocomplete="off">
									</div>
								</div><br>
								<div class="col-lg-2">	 
									Nama Belakang
								</div>
								<div class="col-lg-4">	
									<div class="form-group">	
										<input type="text" class="form-control" rows="3" name="nama_belakang" id="nama_belakang" required="required" autocomplete="off">
									</div></div>

									<div class="col-lg-2">	 
										Tanggal lahir
									</div>
									<div class="col-lg-4">	
										<div class="form-group">	
											<input type="date" class="form-control" rows="3" name="tanggal_lahir" id="tanggal_lahir" required="required" autocomplete="off">
										</div></div>
										<div class="col-lg-2">	 
											Jenis kelamin
										</div>
										<div class="col-lg-4">	
											<div class="form-group">	
												<select class="form-control" name="jenis_kelamin" id="jenis_kelamin" required="required">
													<option value="" disabled selected style="display: none;">-- Pilih Jenis Kelamin --</option>
													<option value="Laki-Laki" id="Laki-Laki">Laki-Laki</option>
													<option value="Perempuan" id="Perempuan">Perempuan</option>
												</select>
											</div></div>
											<div class="col-lg-12" style="margin-bottom: 15px; margin-top: 20px;"><b>Kontak yang dapat dihubungi</b></div><br>
											<div class="col-lg-12">
											<div class="col-lg-2">	 
												No. HP
											</div>
											
											<div class="col-lg-3">	
												<div class="form-group">	
													<input type="number" class="form-control" rows="3" name="no_hp" id="no_hp" required="required" autocomplete="off">
												</div>
											</div>
											</div>
											<div class="col-lg-12">
											<div class="col-lg-2">	 
												Email
											</div>
											<div class="col-lg-4">	
												<div class="form-group">	
													<input type="email" class="form-control" rows="3" name="email" id="email" required="required" autocomplete="off">
												</div>
											</div>
											</div>
											
											<div class="col-lg-12">
												<div class="col-lg-2">
												</div>
												<div class="col-lg-3">
												<button class="btn salmon col-sm-4" style="float: right; height: 50px; width: 100%;background-color: #f40049;color:#fff;" type="button" onclick="kirim()">Kirim Kode Verifikasi</button> 
												</div>
												<div class="col-lg-4">
													<p>Kami telah mengirimkan kode verifikasi melalui Email anda. Mohon dapat menunggu dalam waktu beberapa menit.</p>
												</div>
											</div>
											<div >
												<div class="col-lg-2" style="margin-left:18px; margin-top:20px">
													Kode Verifikasi
												</div>
												<div class="col-lg-4" style="margin-left:-8px; margin-top:20px;margin-right:42%">
													<div class="form-group">
														<input type="text" class="form-control" rows="3" name="kode_verifikasi" id="kode_verifikasi" onchange="cek_kode(this.value)" required="required">
													</div>
												</div>
												<div id="benar" class="col-lg-2" style="margin-left:-460px; margin-top:27px; color:Lime; display: none;">
													Kode telah terverifikasi
												</div>
												<div id="salah" class="col-lg-2" style="margin-left:-460px; margin-top:27px; color:red; display: none;">
													Kode verifikasi salah
												</div>
											</div>
											<div class="col-lg-12">
											<div class="col-lg-2">	 
											
											</div>
											<div class="col-lg-4">	
												<div class="form-group">	
												<p><a href="#" onclick="kirim()" style="color: #f40049">Klik Disini</a> Apabila anda belum menerima kode verifikasi</p>
												</div>
											</div>
											</div>
												<!-- <div class="col-lg-2">	 
													No. HP
												</div>
												<div class="col-lg-4">	
													<div class="form-group">	
														<input type="number" class="form-control" rows="3" name="no_hp" id="no_hp" required="required">
													</div>
												</div> -->
												<div class="col-lg-12" style="margin-bottom: 20px; margin-top: 20px">Dengan menekan tombol dibawah, maka pastikan pasien Anda telah menyetujui <font color="salmon"> Perjanjian User, Kebijakan Privasi,</font> dan <font color="salmon"> Kebijakan Cookie </font></div>

												<div class="form-group">	
													<button id="spassnext" class="btn salmon col-sm-4" style=" height: 50px; width: 40%;background-color: #f40049;color:#fff;left: 300px;" type="button" onclick="simpan()" id="btn_save">Buat Akun Keluarga</button> 
												</div>
											</div>
										</form>
					</div>
				</div>
			</div>
		</div>
	</div><!-- /.col-->
</div>
<!--/.main-->
<script>
	// function kirimVer() {
	// 	swal("Terkirim!", "Kode Verifikasi Pasien Anda Telah Berhasil Dikirimkan Kembali", "success");
	// }

	// $(document).ready(function() {
	// 	swal({
	// 		html: "<b>Kode Verifikasi Pasien Anda Telah Berhasil Dikirimkan</b>",
	// 		imageUrl: "<?php echo base_url('assets/images/icon.png')?>",
	// 		imageWidth: 84,
	// 		imageHeight: 99,
	// 		imageAlt: "",
	// 		confirmButtonText: "Kembali Ke Halaman",
	// 		confirmButtonColor: "#f40049",
	// 	});
	// })	

	function kirim(){
	

		$.ajax({
				url: "<?php echo base_url('Klinik/send_email');?>",
				type: "POST",
				data: $('#formAksi').serialize(),
				dataType: "JSON",
				success: function(result) {
				
					//swal("Terkirim!", "Kode Verifikasi Pasien Anda Telah Berhasil Dikirimkan Ke Email Anda", "success");
					swal({
						html: "<b>Kode Verifikasi Pasien Anda Telah Berhasil Dikirimkan</b>",
						imageUrl: "<?php echo base_url('assets/images/icon.png')?>",
						imageWidth: 84,
						imageHeight: 99,
						imageAlt: "",
						confirmButtonText: "Kembali Ke Halaman",
						confirmButtonColor: "#f40049",
					});
				}, error: function(jqXHR, textStatus, errorThrown) {
					 alert('Error adding data!!!!');
					// swal({ title:"ERROR", text:"Error adding / update data", type: "warning", closeOnConfirm: true}); 
					// $('#btnSave').text('save'); $('#btnSave').attr('disabled',false);  
				}
		});
	}

	function cek_kode(val) {

		

		$.ajax({

		url: '<?php echo base_url("Klinik/cek_kode/");?>/'+val,

		dataType:'json',

		success:function(response){

			// console.log(response);
		// $('.txt_csrfname').val(response.token);

			if (response=="true") {

				//document.getElementById('benar').removeAttribute('style');

				$("#benar").attr('style','display: block;margin-left:-460px; margin-top:27px; color:Lime;');
				$("#salah").attr('style','display: none;margin-left:-460px; margin-top:27px; color:Red;');

				$('[name="cekemailin"]').val('1');

				document.getElementById('spassnext').removeAttribute('disabled');

				// console.log('benar');

			}else{

				//document.getElementById('salah').removeAttribute('style');

				//document.getElementById('salah').removeAttribute('disabled');

				//$("#dur_pass2").attr('class','col-sm-10 has-error');

				$("#salah").attr('style','display: block;margin-left:-460px; margin-top:27px; color:red;');
				$("#benar").attr('style','display: none;margin-left:-460px; margin-top:27px; color:Lime;');
				$("#spassnext").attr('disabled','disabled');
				//$('[name="cekemailin"]').val('0');

				// console.log('salah');

			}

		},

		error:function(){

			alert('ERROR ! Check your internet connection');

			//$(id).html('ERROR');

		}

		});

	}

	function simpan(){
		swal({
							html: "Akun pasien anda telah terbuat. Informasikan  kepada pasien terkait bahwa <b>password telah dikirmkan melalui email terdaftar</b>",
							type: "success",
							confirmButtonColor: "#ff0055",
							confirmButtonText: "Kembali Ke Halaman Awal",
							}).then((result) => {
								if(result.value){
										//this is your success swal, after clicking the yes button, it will reload or go to the other page.
										location.reload(); // this is your location reload.
										window.location.href='<?php echo base_url('Owner.html') ?>'; // this is your relocate to other page.
								}
							})
	}
</script>

<!-- <script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="<?php echo base_url() ?>assets/kode_tel/build/js/intlTelInput.js"></script>
<script>
    $("#mobile-number").intlTelInput();
</script> -->


<style>
	.swal-text {
		background-color: #FEFAE3;
		padding: 17px;
		border: 1px solid black;
		display: block;
		margin: 22px;
		text-align: center;
		color: #61534e;
	}

	.swal-button {
		padding: 7px 19px;
		border-radius: 1px;
		background-color: #f40049;
		font-size: 12px;
		border: 2px solid black;
	}
</style>