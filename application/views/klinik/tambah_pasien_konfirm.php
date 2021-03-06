<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- <link rel="stylesheet" href="<?php echo base_url() ?>assets/kode_tel/build/css/intlTelInput.css">
<link rel="stylesheet" href="<?php echo base_url() ?>assets/kode_tel/build/css/demo.css"> -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
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
					<form action="<?php echo base_url('klinik/home/'); ?>" method="post">
						<div class="form-group">
							<div class="div">
								<div>
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
								<div>
									<div class="col-lg-3" style="margin-left:192px;">
										<a href="<?php echo base_url('Klinik/kirim_email')?>" id="kirim-verif" style="color:red" href="#">Klik Disini</a>
										Apabila Anda belum menerima kode verifikasi
									</div>
								</div>
								<div class="col-lg-12" style="margin-bottom: 20px; margin-top: 20px; margin-left: 80px">Dengan menekan tombol dibawah, maka pastikan pasien Anda telah menyetujui <a style="color:red" href="#"> Perjanjian User</a>,<a style="color:red" href="#">Kebijakan Privasi</a> dan <a style="color:red" href="#"> Kebijakan Cookie</a></div>
								<div class="form-group">
									<!-- <button class="btn salmon col-sm-4" style="float: center; height: 50px; width: 30%; background-color: #f40049; color: white; border-radius: 15px; margin-left:35%" type="submit" href="#">Buat Akun Keluarga</button> -->
									<button onclick="kirimNotif()" id="spassnext" data-toogle="tooltip" data-placement="bottom" class="btn salmon col-sm-4" style="float: center; height: 50px; width: 30%; background-color: #f40049; color: white; border-radius: 15px; margin-left:35%" type="submit" href="#">Buat Akun Keluarga</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div><!-- /.col-->
</div>
<!--/.main-->
<script>
	function kirimVer() {
		swal("Terkirim!", "Kode Verifikasi Pasien Anda Telah Berhasil Dikirimkan Kembali", "success");
	}

	function kirimNotif() {
		swal("Berhasil!", "Akun pasien Anda telah terbuat. Informasikan kepada pasien terkait bahwa password telah dikirimkan melalui email terdaftar.", "success");
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