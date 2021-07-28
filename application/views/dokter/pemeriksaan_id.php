<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<link href="<?php echo base_url() ?>assets/css/odontogram.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link id="bsdp-css" href="https://unpkg.com/bootstrap-datepicker@1.9.0/dist/css/bootstrap-datepicker3.min.css" rel="stylesheet">
<script src="https://unpkg.com/bootstrap-datepicker@1.9.0/dist/js/bootstrap-datepicker.min.js"></script>
<script type='text/javascript'>
	$(window).load(function() {
		$("#jenis_pembayaran").change(function() {
			console.log($("#jenis_pembayaran option:selected").val());
			if ($("#jenis_pembayaran option:selected").val() == '3') {
				$('#asuransiku').prop('hidden', false);
			} else {
				$('#asuransiku').prop('hidden', 'true');
			}
		});
	});
	$(window).load(function() {
		$(".stileone").on("click", function() {
			$(".stileone").css("background-color", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stileone1").on("click", function() {
			$(".stileone1").css("background", "#f40049");
			$(".stileone").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stileone2").on("click", function() {
			$(".stileone2").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stileone3").on("click", function() {
			$(".stileone3").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stileone4").on("click", function() {
			$(".stileone4").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stileone5").on("click", function() {
			$(".stileone5").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone4").css("background", "transparent");


		});
		$(".stil").on("click", function() {
			$(".stileone").css("background-color", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil1").on("click", function() {
			$(".stileone1").css("background", "#f40049");
			$(".stileone").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil2").on("click", function() {
			$(".stileone1").css("background", "#f40049");
			$(".stileone2").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil3").on("click", function() {
			$(".stileone2").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil4").on("click", function() {
			$(".stileone3").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil5").on("click", function() {
			$(".stileone4").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone5").css("background", "transparent");
		});
	});
	$(window).load(function() {
		$(".stil6").on("click", function() {
			$(".stileone5").css("background", "#f40049");
			$(".stileone1").css("background", "transparent");
			$(".stileone2").css("background", "transparent");
			$(".stileone3").css("background", "transparent");
			$(".stileone").css("background", "transparent");
			$(".stileone4").css("background", "transparent");
		});
	});



	function next1() {
		var x = document.getElementById("data_diri1");
		var y = document.getElementById("data_diri2");
		y.style.display = "block";
		x.style.display = "none";
	}

	function next2() {
		var x = document.getElementById("data_diri2");
		var y = document.getElementById("data_diri3");
		y.style.display = "block";
		x.style.display = "none";
	}

	function next3() {
		var x = document.getElementById("data_diri3");
		var y = document.getElementById("data_diri4");
		y.style.display = "block";
		x.style.display = "none";
	}

	function prev2() {
		var x = document.getElementById("data_diri2");
		var y = document.getElementById("data_diri1");
		y.style.display = "block";
		x.style.display = "none";
	}

	function prev3() {
		var x = document.getElementById("data_diri3");
		var y = document.getElementById("data_diri2");
		y.style.display = "block";
		x.style.display = "none";
	}

	function prev4() {
		var x = document.getElementById("data_diri4");
		var y = document.getElementById("data_diri3");
		y.style.display = "block";
		x.style.display = "none";
	}

	function sel1() {
		var x = document.getElementById("keluhan1");
		var y = document.getElementById("keluhan2");
		y.style.display = "block";
		x.style.display = "none";
	}

	function sel2() {
		var x = document.getElementById("keluhan2");
		var y = document.getElementById("keluhan3");
		y.style.display = "block";
		x.style.display = "none";
	}

	function sel3() {
		var x = document.getElementById("keluhan3");
		var y = document.getElementById("keluhan4");
		y.style.display = "block";
		x.style.display = "none";
	}

	function sel4() {
		var x = document.getElementById("keluhan4");
		var y = document.getElementById("keluhan5");
		y.style.display = "block";
		x.style.display = "none";
	}

	function sel5() {
		var x = document.getElementById("keluhan5");
		var y = document.getElementById("keluhan6");
		y.style.display = "block";
		x.style.display = "none";
	}

	function kem2() {
		var x = document.getElementById("keluhan2");
		var y = document.getElementById("keluhan1");
		y.style.display = "block";
		x.style.display = "none";
	}

	function kem3() {
		var x = document.getElementById("keluhan3");
		var y = document.getElementById("keluhan2");
		y.style.display = "block";
		x.style.display = "none";
	}

	function kem4() {
		var x = document.getElementById("keluhan4");
		var y = document.getElementById("keluhan3");
		y.style.display = "block";
		x.style.display = "none";
	}

	function kem5() {
		var x = document.getElementById("keluhan5");
		var y = document.getElementById("keluhan4");
		y.style.display = "block";
		x.style.display = "none";
	}

	function kem6() {
		var x = document.getElementById("keluhan6");
		var y = document.getElementById("keluhan5");
		y.style.display = "block";
		x.style.display = "none";
	}
</script>
<style type="text/css">
	@media only screen and (max-width: 800px) {
		.stileone {
			background-color: #f40049;
		}

		.tab-content {
			height: auto;
			width: auto;
			top: 10px;
			bottom: 500px;
			z-index: 1;
			/*border-bottom: 1px solid black;
		border-left: 1px solid black;
		border-top: 1px solid black;
		border-right: 1px solid black;*/
			/*padding-right: 50px;*/
		}

		.mt-4 {
			margin: 25px 0 0 0;
		}

		.mt-5 {
			padding: 25px 150px 0;
		}

		.mt-5 a {
			padding: 10px;
			font-size: 15px;
			border-radius: 5px;
		}

		a.mt-6 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 150px;
			font-size: 15px;
			margin: 50px 0 0 0;
		}

		a.mt-7 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 150px;
			font-size: 15px;
			cursor: pointer;
			margin: 50px 0 0 50px;
		}

		a.mt-8 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 170px;
			font-size: 15px;
			cursor: pointer;
			margin: 235px 0 0 0px;
		}

		a.mt-9 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 170px;
			font-size: 15px;
			cursor: pointer;
			margin: 170px 0 0 0px;
		}

		.mt-f {
			float: right;
		}

		.bor-top {
			border-top: 2px solid #fff;
		}

		.nav-gr {
			height: auto;
			width: auto;
			background-color: transparent;
			margin: 0 0px 0 0;
			float: right;
			color: white;
			z-index: 2;
		}

		.box {
			height: auto;
			width: auto;
			background-color: #424242;
			display: block;
			z-index: 2;
		}

		.box-gr {
			height: 85px;
			width: auto;
			float: left;
			border-radius: 45px 0 0 45px;
			z-index: 2;
		}

		.box-gr-item {
			height: 85px;
			width: 300px;
			float: left;
			border-radius: 45px 0 0 45px;
			border-bottom: 2px solid #fff;
			z-index: 2;
		}

		.boxx {
			margin-left: 0px;
			border-radius: 45px 0 0 45px;
			float: left;
			color: #000;
		}

		.row.boxx.active {
			background-color: #f40049;
			color: #fff;
		}

		.box-gr-header {
			height: 40px;
			width: 300px;
			font-size: 18px;
			padding: 10px 0 0 110px;
			font-weight: bold;
			color: white;
		}

		.box-gr-graf {
			height: 35px;
			width: 500px;
			font-size: 12px;
			padding: 0 0 0 110px;
			color: white;
		}

		.row.boxx:hover {
			background-color: #f40049;
			cursor: pointer;
			color: #fff;
		}

		.box-gr-circle {
			height: 85px;
			width: 85px;
			text-align: center;
			border-radius: 100%;
			border: 3px solid #E6E6E6;
		}

		.box-gr-count {
			font-size: 29px;
			position: absolute;
			margin: 20px 0 0 31px;
			font-weight: bold;
			color: white;
		}

		.cir-col {
			background-color: #A9A9A9;
		}

		.nav-eta {
			margin: 20px 0 0 0px;
			/*background-color: red;*/
		}

		.mr-1 {
			margin: 80px 0 0 70px;
		}

		.mr-2 {
			margin: 5px 0 0 10px;
		}

		.box-eta td+td {
			padding-left: 50px;
		}

		.box-eta td {
			color: #797979;
			font-size: 15px;
		}

		.box-eta td.title-f {
			font-weight: bold;
			/*text-transform: capitalize;*/
		}

		.box-eta input {
			border: 1px solid #DCDCDC;
			box-shadow: none;
			border-radius: 3px;
			float: right;
			margin: 10px 0 0 0;
			width: 267px;
		}

		.box-eta textarea {
			width: 520px;
			margin: 15px 0 0 0;
			border: 1px solid #DCDCDC;
		}

		.box-eta-title {
			margin: 30px 0 0 10px;
			font-size: 18px;
			font-weight: bold;
			text-transform: uppercase;
		}

		.title-header {
			margin: 30px 0 0 10px;
			font-size: 18px;
			font-weight: bold;
			text-transform: uppercase;
		}

		.title-content {
			margin: 20px 0 0 10px;
			font-size: 15px;
			line-height: 1.5em;
		}

		.title-content-x {
			margin: 5px 0 0 10px;
			font-size: 15px;
			line-height: 1.5em;
		}

		.box-dat-title {
			margin: 30px 0 0 10px;
			font-size: 15px;
			font-weight: bold;
			text-transform: uppercase;
			/*background-color: pink;*/
		}

		.box-dat td {
			color: #797979;
			font-size: 15px;
			/*background-color: red;*/
		}

		.box-dat td+td {
			padding-left: 20px;
		}

		.box-dat input {
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		.in-1 {
			width: 20px;
		}

		.in-1 select {
			width: 70px;
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		.label-c {
			color: #797979;
			padding: 10px 0 0 0;
			font-size: 15px;
		}

		.in-2 {
			width: 170px;
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		label.control-t {
			font-weight: normal;
		}

		.noid {
			margin-top: 500px;
			padding-right: 200px;
		}

		.alt td {
			color: #797979;
			font-size: 15px;
			padding: 0 0 0 10px;
			/*background-color: red;*/
		}

		.alt td+td {
			padding-left: 35px;
		}

		.alt input {
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			padding: 0 370px 0 0;
			box-shadow: none;
		}

		.custom-select {
			position: relative;
			font-family: Arial;
			padding: 0 0 0 50px;
			color: #000;
		}

		.custom-select select {
			display: none;
			/*hide original SELECT element:*/
		}

		.select-selected {
			width: 170px;
			background-color: #fff;
			border-radius: 5px;
		}

		/*style the arrow inside the select element:*/
		.select-selected:after {
			float: right;
			margin: 7px 0 0 0;
			content: "";
			top: 14px;
			right: 10px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: #778899 transparent transparent transparent;
		}

		/*point the arrow upwards when the select box is open (active):*/
		.select-selected.select-arrow-active:after {
			background-color: white;
			top: 7px;
			margin: 2px 0 0 0;
		}

		/*style the items (options), including the selected item:*/
		.select-items div,
		.select-selected {
			color: #778899;
			padding: 8px 16px;
			width: 170px;
			border: 1px solid #eee;
			box-shadow: none;
			cursor: pointer;
			user-select: none;
		}

		/*style items (options):*/
		.select-items {
			background-color: #eee;
			width: 170px;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 99;
		}

		/*hide the items when the select box is closed:*/
		.select-hide {
			display: none;
		}

		.select-items div:hover,
		.same-as-selected {
			background-color: #30a5ff;
			color: #fff;
		}

		.kotak {}
	}


	/* untuk mengubah css dalam konten */
	@media only screen and (min-width: 900px) {
		.stileone {
			background-color: #f40049;
		}

		.tab-content {
			height: 693px;
			width: 700px;
			z-index: 1;
			border-bottom: 1px solid black;
			border-left: 1px solid black;
			border-top: 1px solid black;
			padding-right: 50px;
		}

		.mt-4 {
			margin: 25px 0 0 0;
		}

		.mt-5 {
			padding: 25px 150px 0;
		}

		.mt-5 a {
			padding: 10px;
			font-size: 15px;
			border-radius: 5px;
		}

		a.mt-6 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 150px;
			font-size: 15px;
			margin: 50px 0 0 0;
		}

		a.mt-7 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 150px;
			font-size: 15px;
			cursor: pointer;
			margin: 50px 0 0 50px;
		}

		a.mt-8 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 170px;
			font-size: 15px;
			cursor: pointer;
			margin: 235px 0 0 0px;
		}

		.salmon {
			float: right;
			margin-top: 20%;
			color: white;
			background-color: #f40049;
		}

		a.mt-9 {
			padding: 25px 150px 0;
			padding: 10px;
			width: 170px;
			font-size: 15px;
			cursor: pointer;
			margin: 170px 0 0 0px;
		}

		.mt-f {
			float: right;
		}

		.bor-top {
			border-top: 2px solid #fff;
		}

		.nav-gr {
			background-color: transparent;
			margin: 0 60px 0 0;
			float: right;
			color: white;
			z-index: 2;
		}

		.box {
			height: 560px;
			width: 360px;
			background-color: #424242;
			display: block;
			z-index: 2;
		}

		.box-gr {
			height: 85px;
			width: 400px;
			float: right;
			border-radius: 45px 0 0 45px;
			z-index: 2;
		}

		.box-gr-item {
			height: 85px;
			width: 400px;
			float: left;
			border-radius: 45px 0 0 45px;
			border-bottom: 2px solid #fff;
			z-index: 2;
		}

		.boxx {
			margin-left: 0px;
			border-radius: 45px 0 0 45px;
			float: left;
			color: #000;
		}

		.row.boxx.active {
			background-color: #f40049;
			color: #fff;
		}

		.box-gr-header {
			height: 40px;
			width: 400px;
			font-size: 18px;
			padding: 10px 0 0 110px;
			font-weight: bold;
			color: white;
		}

		.box-gr-graf {
			height: 35px;
			width: 400px;
			font-size: 13px;
			padding: 0 0 0 110px;
			color: white;
		}

		.row.boxx:hover {
			background-color: #f40049;
			cursor: pointer;
			color: #fff;
		}

		.box-gr-circle {
			height: 85px;
			width: 85px;
			text-align: center;
			border-radius: 100%;
			border: 3px solid #E6E6E6;
		}

		.box-gr-count {
			font-size: 29px;
			position: absolute;
			margin: 20px 0 0 31px;
			font-weight: bold;
			color: white;
		}

		.cir-col {
			background-color: #A9A9A9;
		}

		.nav-eta {
			margin: 20px 0 0 0px;
			/*background-color: red;*/
		}

		.mr-1 {
			margin: 80px 0 0 70px;
		}

		.mr-2 {
			margin: 5px 0 0 10px;
		}

		.box-eta td+td {
			padding-left: 50px;
		}

		.box-eta td {
			color: #797979;
			font-size: 15px;
		}

		.box-eta td.title-f {
			font-weight: bold;
			/*text-transform: capitalize;*/
		}

		.box-eta input {
			border: 1px solid #DCDCDC;
			box-shadow: none;
			border-radius: 3px;
			float: right;
			margin: 10px 0 0 0;
			width: 267px;
		}

		.box-eta textarea {
			width: 520px;
			margin: 15px 0 0 0;
			border: 1px solid #DCDCDC;
		}

		.box-eta-title {
			margin: 30px 0 0 10px;
			font-size: 18px;
			font-weight: bold;
			text-transform: uppercase;
		}

		.title-header {
			margin: 30px 0 0 10px;
			font-size: 18px;
			font-weight: bold;
			text-transform: uppercase;
		}

		.title-content {
			margin: 20px 0 0 10px;
			font-size: 15px;
			line-height: 1.5em;
		}

		.title-content-x {
			margin: 5px 0 0 10px;
			font-size: 15px;
			line-height: 1.5em;
		}

		.box-dat-title {
			margin: 30px 0 0 10px;
			font-size: 15px;
			font-weight: bold;
			text-transform: uppercase;
			/*background-color: pink;*/
		}

		.box-dat td {
			color: #797979;
			font-size: 15px;
			/*background-color: red;*/
		}

		.box-dat td+td {
			padding-left: 20px;
		}

		.box-dat input {
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		.in-1 {
			width: 20px;
		}

		.in-1 select {
			width: 70px;
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		.label-c {
			color: #797979;
			padding: 10px 0 0 0;
			font-size: 15px;
		}

		.in-2 {
			width: 170px;
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			box-shadow: none;
		}

		label.control-t {
			font-weight: normal;
		}

		.noid {
			margin-top: 500px;
			padding-right: 200px;
		}

		.alt td {
			color: #797979;
			font-size: 15px;
			padding: 0 0 0 10px;
			/*background-color: red;*/
		}

		.alt td+td {
			padding-left: 35px;
		}

		.alt input {
			margin: 10px 0 0 0;
			border: 1px solid #DCDCDC;
			padding: 0 370px 0 0;
			box-shadow: none;
		}

		.custom-select {
			position: relative;
			font-family: Arial;
			padding: 0 0 0 50px;
			color: #000;
		}

		.custom-select select {
			display: none;
			/*hide original SELECT element:*/
		}

		.select-selected {
			width: 170px;
			background-color: #fff;
			border-radius: 5px;
		}

		/*style the arrow inside the select element:*/
		.select-selected:after {
			float: right;
			margin: 7px 0 0 0;
			content: "";
			top: 14px;
			right: 10px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: #778899 transparent transparent transparent;
		}

		/*point the arrow upwards when the select box is open (active):*/
		.select-selected.select-arrow-active:after {
			background-color: white;
			top: 7px;
			margin: 2px 0 0 0;
		}

		/*style the items (options), including the selected item:*/
		.select-items div,
		.select-selected {
			color: #778899;
			padding: 8px 16px;
			width: 170px;
			border: 1px solid #eee;
			box-shadow: none;
			cursor: pointer;
			user-select: none;
		}

		/*style items (options):*/
		.select-items {
			background-color: #eee;
			width: 170px;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 99;
		}

		/*hide the items when the select box is closed:*/
		.select-hide {
			display: none;
		}

		.select-items div:hover,
		.same-as-selected {
			background-color: #30a5ff;
			color: #fff;
		}

		.kotak {}
	}

	.disp-n {
		display: none;
	}

	.disp-b {
		display: block;
	}
</style>
<div class="modal fade bs-example-modal-sm" id="" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
			<center><img src="<?php echo base_url('assets/img/loader.gif'); ?>"></center>
		</div>
	</div>
</div>

<div class="modal bs-example-modal-sm" id="loading" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
	<center>
		<div class="modal-dialog modal-sm" role="document" style="margin-top: 17%;     ">
			<div class="modal-content" style="width: 42%;">
				<img src="<?php echo base_url('assets/img/loader.gif'); ?>">
				<p>Loading</p>
			</div>
		</div>
	</center>
</div>
<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">

	<div class="row">
		<div class="col-lg-12">
		</div>
	</div>
	<!--/.row-->
	<br>
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default" style="height: 870px;">
				<div class="panel-body">
					<div class="col-md-12">
						<h3 class="mb-20 weight-500">Pemeriksaan
							<?php $a = 0;
							$b = 1;
							foreach ($pasien->result() as $result) {
								$a++;
								if ($a <= $b) {
									$idpemeriksaan = $result->id_rekam_medis;
							?>
									<?php echo $result->nama_depan; ?>
									(<?php
										$idRekamMedis = $result->id_rekam_medis;
										echo $result->id_rekam_medis;
										?>)
							<?php }
							} ?>

						</h3><br>
					</div>
					<div class="kotak">
						<div class="col-xs-3 nav-gr">
							<div class="row box">
								<div class="box-gr mt-4 stileone">
									<div class="row boxx tablink" data-toggle="tab" href="#pilih_jadwal">
										<div class="box-gr-item bor-top">
											<div class="box-gr-header">Data Diri & Anamnesa</div>
											<div class="box-gr-graf">Lihat data diri dan anamnesa pasien</div>
										</div>
										<div class="box-gr-circle stileone">
											<div class="box-gr-count">1</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>
								</div>
								<div class="box-gr stileone1">
									<div class="row boxx tablink" data-toggle="tab" href="#data_diri">
										<div class="box-gr-item">
											<div class="box-gr-header">Odontogram (Before)</div>
											<div class="box-gr-graf">Lengkapi odontogram pasien sebelum melakukan perawatan</div>
										</div>
										<div class="box-gr-circle stileone1">
											<div class="box-gr-count">2</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>
								</div>
								<div class="box-gr stileone2">
									<div class="row boxx tablink" data-toggle="tab" href="#keluhan">
										<div class="box-gr-item">
											<div class="box-gr-header">Pemeriksaan Klinis & Penunjang</div>
											<div class="box-gr-graf">Lengkapi pemeriksaan klinis & pemeriksaan penunjang</div>
										</div>
										<div class="box-gr-circle stileone2">
											<div class="box-gr-count">3</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>

								</div>
								<div class="box-gr stileone3">
									<div class="row boxx tablink" data-toggle="tab" href="#metode_pembayaran">
										<div class="box-gr-item">
											<div class="box-gr-header">Diagnosa</div>
											<div class="box-gr-graf">Lengkapi diagnosa terhadap keluhan pasien</div>
										</div>
										<div class="box-gr-circle stileone3">
											<div class="box-gr-count">4</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>
								</div>
								<div class="box-gr stileone4">
									<div class="row boxx tablink" data-toggle="tab" href="#konfirmasi_booking">
										<div class="box-gr-item">
											<div class="box-gr-header">Perawatan</div>
											<div class="box-gr-graf">Lengkapi Perawatan yang diberikan kepada pasien</div>
										</div>
										<div class="box-gr-circle stileone4">
											<div class="box-gr-count">5</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>
								</div>
								<div class="box-gr stileone5">
									<div class="row boxx tablink" data-toggle="tab" href="#odontogram_after">
										<div class="box-gr-item">
											<div class="box-gr-header">Odontogram (After)</div>
											<div class="box-gr-graf">Lengkapi odontogram pasien setelah melakukan perawatan</div>
										</div>
										<div class="box-gr-circle stileone5">
											<div class="box-gr-count">6</div>
										</div>
									</div>
									<div class="box-gr-circle cir-col"></div>
								</div>
							</div>
						</div>
						<br>
						<form id="formRawatTambah" method="" enctype="multipart/form-data">
							<div class="tab-content col-md-8">
								<div id="pilih_jadwal" class="tab-pane fade in active">

									<div id="data_diri1">
										<input type="hidden" name="id_booking" value="<?php echo $result->id_booking; ?>">
										<input type="hidden" name="id_pasien" id="id_pasien" value="<?php echo $result->id_pasien; ?>">
										<input type="hidden" name="id_rekam_medis" value="<?php echo $result->id_rekam_medis; ?>">

										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Informasi Umum</h5><br>
										</div>
										<?php foreach ($pasien->result() as $result) : ?>
											<div class="col-lg-2">
												Nama Depan <?php echo form_error('nama_depan') ?>
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<input type="text" class="form-control" rows="3" name="nama_depan" id="nama_depan" value="<?php echo $result->nama_depan; ?>">
												</div>
											</div>
											<div class="col-lg-2">
												Nama Belakang <?php echo form_error('nama_belakang') ?>
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<input type="text" class="form-control" rows="3" name="nama_belakang" id="nama_belakang" value="<?php echo $result->nama_belakang; ?>">
												</div>
											</div>
											<div class="col-lg-2">
												Tempat Lahir
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<select class="form-control" name="tempat_lahir" id="tempat_lahir">
														<option selected value="<?php echo $result->tempat_lahir; ?>" style="display: none;"><?= $result->tempat_lahir ?></option>
														<option value="Malang" id="Malang">Malang</option>
														<option value="Surabaya" id="Surabaya">Surabaya</option>
														<option value="Semarang" id="Semarang">Semarang</option>
														<option value="Medan" id="Medan">Medan</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Tanggal lahir
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<input type="date" class="form-control" rows="3" name="tanggal_lahir" id="tanggal_lahir" value="<?php echo $result->tanggal_lahir; ?>">
												</div>
											</div>
											<div class="col-lg-2">
												Jenis kelamin
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<select class="form-control" name="jenis_kelamin" id="jenis_kelamin">
														<option value="<?php echo $result->jenis_kelamin; ?>" selected style="display: none;"><?php echo $result->jenis_kelamin; ?></option>
														<option value="Laki-Laki" id="Laki-Laki">Laki-Laki</option>
														<option value="Perempuan" id="Perempuan">Perempuan</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Status Pernikahan
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<select class="form-control" name="status_nikah" id="status_nikah">
														<option value="<?php echo $result->status_nikah; ?>" selected style="display: none;"><?php echo $result->status_nikah; ?></option>
														<option value="Menikah" id="Menikah">Menikah</option>
														<option value="Belum Menikah" id="Belum Menikah">Belum Menikah</option>
														<option value="Duda" id="Duda">Duda</option>
														<option value="Janda" id="Janda">Janda</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Pekerjaan
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<select class="form-control" name="pekerjaan" id="pekerjaan">
														<option value="<?php echo $result->pekerjaan; ?>" selected style="display: none;"><?php echo $result->pekerjaan; ?></option>
														<option value="Pegawai Negeri Sipil" id="Pegawai Negeri Sipil">Pegawai Negeri Sipil</option>
														<option value="Swasta" id="Swasta">Swasta</option>
														<option value="Tidak Bekerja" id="Tidak Bekerja">Tidak Bekerja</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Pendidikan
											</div>
											<div class="col-lg-4">
												<div class="form-group">
													<select class="form-control" name="pendidikan" id="pendidikan">
														<option value="<?php echo $result->pendidikan; ?>" selected style="display: none;"><?php echo $result->pendidikan; ?></option>
														<option value="S1/S2/S3" id="S1/S2/S3">S1/S2/S3</option>
														<option value="SMA/setaranya" id="SMA/setaranya">SMA/setaranya</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Jenis ID
											</div>
											<div class="col-lg-2">
												<div class="form-group">
													<select class="form-control" name="jenis_id" id="jenis_id">
														<option value="<?php echo $result->jenis_id; ?>" selected style="display: none;"><?php echo $result->jenis_id; ?></option>
														<option value="VIP" id="VIP">VIP</option>
														<option value="Umum" id="Umum">Umum</option>
													</select>
												</div>
											</div>
											<div class="col-lg-2">
												Nomer ID
											</div>
											<div class="col-lg-6">
												<div class="form-group">
													<input type="text" class="form-control" rows="3" name="no_id" id="no_id" value="<?php echo $result->no_id; ?>">
												</div>
											</div>
											<button onclick="next1()" type="button" class="btn salmon" style="float: right; margin-top: 20%;">Selanjutnya</button>
									</div>
									<div id="data_diri2" hidden>
										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Alamat dan kontak yang bisa dihubungi</h5><br>
										</div>
										<div class="col-lg-2">
											Nama Jalan
										</div>
										<div class="col-lg-10">
											<div class="form-group">
												<input type="text" class="form-control" rows="3" name="alamat" id="alamat" value="<?php echo $result->alamat; ?>">
											</div>
										</div>
										<div class="col-lg-2">
											Kota/Kab
										</div>
										<div class="col-lg-3">
											<div class="form-group">
												<select class="form-control" name="kota_kab" id="kota_kab">
													<option value="<?php echo $result->kota_kab; ?>" selected style="display: none;"><?php echo $result->kota_kab; ?></option>
													<option value="Malang" id="Malang">Malang</option>
													<option value="Surabaya" id="Surabaya">Surabaya</option>
													<option value="Semarang" id="Semarang">Semarang</option>
													<option value="Medan" id="Medan">Medan</option>
												</select>
											</div>
										</div>
										<div class="col-lg-1">
											Provinsi
										</div>
										<div class="col-lg-3">
											<div class="form-group">
												<select class="form-control" name="provinsi" id="provinsi">
													<option value="<?php echo $result->provinsi; ?>" selected style="display: none;"><?php echo $result->provinsi; ?></option>
													<option value="Jawa Timur" id="Jawa Timur">Jawa Timur</option>
													<option value="Jawa Barat" id="Jawa Barat">Jawa Barat</option>
													<option value="Jawa Tengah" id="Jawa Tengah">Jawa Tengah</option>
													<option value="Sumatera Utara" id="Sumatera Utara">Sumatera Utara</option>
												</select>
											</div>
										</div>
										<div class="col-lg-1">
											KodePos
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type="number" class="form-control" rows="3" name="kode_pos" id="kode_pos" value="<?php echo $result->kode_pos; ?>">
											</div>
										</div>
										<div class="col-lg-2">
											Email
										</div>
										<div class="col-lg-4">
											<div class="form-group">
												<input type="email" class="form-control" rows="3" name="email" id="email" value="<?php echo $result->email; ?>">
											</div>
										</div>
										<div class="col-lg-2">
											No. HP
										</div>
										<div class="col-lg-4">
											<div class="form-group">
												<input type="number" class="form-control" rows="3" name="no_hp" id="no_hp" value="<?php echo $result->no_hp; ?>">
											</div>
										</div>

										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Kondisi Kesehatan Umum</h5><br>
										</div>
										<div class="col-lg-2">
											Golongan Darah
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<select class="form-control" name="gol_darah" id="gol_darah">
													<option value="<?php echo $result->gol_darah; ?>"><?php echo $result->gol_darah; ?></option>
													<option value="A" id="A">A</option>
													<option value="B" id="B">B</option>
													<option value="AB" id="AB">AB</option>
													<option value="O" id="O">O</option>
												</select>
											</div>
										</div>
										<div class="col-lg-2">
											Alergi (Bila Ada)
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type="text" class="form-control" rows="3" name="alergi" id="alergi" value="<?php echo $result->alergi; ?>">
											</div>
										</div>
										<div class="col-lg-2">
											Riwayat Penyakit
										</div>
										<div class="col-lg-10">
											<div class="form-group">
												<input type="text" class="form-control" rows="3" name="riwayat_penyakit" id="riwayat_penyakit" value="<?php echo $result->riwayat_penyakit; ?>">
											</div>
										</div>
										<div class="col-lg-2">
											<b>Keadaan Umum Pasien</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="keadaan_umum" value="Baik" required> Baik
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="keadaan_umum" value="Sedang"> Sedang
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="keadaan_umum" value="Buruk"> Buruk
											</div>
										</div>

										<div class="col-lg-12">
										</div>
									<?php endforeach; ?>

									<button onclick="prev2()" type="button" class="btn salmon" style="float: left;  margin-top: 5%;">Kembali</button>
									<button onclick="next2()" type="button" class="btn salmon" style="float: right;  margin-top: 5%;">Selanjutnya</button>
									</div>
									<div id="data_diri3" hidden>
										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Keluhan (Anamnesa)</h5><br>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<textarea name="keluhan_utama" class="form-control" placeholder="Jelaskan secara detail keluhan" rows="10" required><?= $result->keluhan; ?></textarea>
											</div>
										</div>
										<button onclick="prev3()" type="button" class="btn salmon" style="float: left;  margin-top: 25%;">Kembali</button>
										<button data-toggle="tab" href="#data_diri" type="button" class="btn salmon stil2" style="float: right;margin-top: 25%;">Selanjutnya</button>

									</div>
								</div>
								<div id="data_diri" class="tab-pane fade">
									<div class="col-md-12">
										<h5 class="mb-20 weight-500" style="font-weight: bold">Odontogram</h5><br>
										<table style="width: 100%">
											<tbody>

												<tr>
													<td>
														<div id="controls" class="panel panel-default" style="margin-bottom: 270px;">
															<div class="panel-body">
																<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																	<p>

																		<div id="kariesSuperfisia" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 3px 0px;" onclick="zoom()">
																			<input type="radio" name="options" id="option21" checked><img src="<?php echo base_url('assets/images/icon/panah.jpg') ?>" style="width: 24px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia2" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option2" checked><img src="<?php echo base_url('assets/images/icon/2.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<br />
																	<p>
																		<div id="kariesSuperfisia3" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option3" checked> <img src="<?php echo base_url('assets/images/icon/3.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia12" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option13" checked> <img src="<?php echo base_url('assets/images/icon/41.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia13" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option14" checked> <img src="<?php echo base_url('assets/images/icon/42.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia14" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option15" checked> <img src="<?php echo base_url('assets/images/icon/43.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia4" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option4" checked><img src="<?php echo base_url('assets/images/icon/4.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia5" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option5" checked><img src="<?php echo base_url('assets/images/icon/5.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia6" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option7" checked><img src="<?php echo base_url('assets/images/icon/6.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia7" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option8" checked><img src="<?php echo base_url('assets/images/icon/7.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia8" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option9" checked><img src="<?php echo base_url('assets/images/icon/8.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia9" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option10" checked><img src="<?php echo base_url('assets/images/icon/9.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia10" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option11" checked><img src="<?php echo base_url('assets/images/icon/10.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia11" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																			<input type="radio" name="options" id="option6" autocomplete="off"><img src="<?php echo base_url('assets/images/icon/11.jpg') ?>" style="width: 28px;" onclick="defaulton()">
																		</div>
																	</p>
																	<!-- <p>
														<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																	<input type="radio" name="options" id="option12" autocomplete="off"> Sambungkan
																</div>
														</p> -->
																</div>
															</div>
													</td>
													<td>
														<!-- <div id="controls2" class="panel panel-default">
														<div class="panel-body">
															<div class="btn-group" data-toggle="buttons">
																
																<label id="puente" class="btn btn-primary">
																	<input type="radio" name="options" id="option5" autocomplete="off"> Puente
																</label>
															</div>
														</div>
													</div> -->
														<!-- <button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;right: -7px;" type="button" ><i class="fa fa-reply"></i> Undo</button>

													<button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;right: -4px;" type="button" ><i class="fa fa-share"></i> Redo</button>
													<button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;" type="button" ><i class="fas fa-redo-alt"></i> Reset</button> -->
														<form method="get">
															<div class="col-md-12">
																<div class="col-md-4">
																	<input type="text" class="form-control" id="tgl_awal" name="tgl_awal" autocomplete="off">
																</div>
																<!-- <div class="col-md-4">	
															<input type="text" class="form-control" id="tgl_akhir" name="tgl_akhir">
														</div> -->
																<div class="col-md-3">
																	<button type="button" id="cari" name="cari" onclick="load_odontogram()">Filter</button>
																</div>
															</div>
														</form>
														<div class="col-sm-2"></div>
														<br /><br />
														<div id="kota"></div>
														<div id="odontogram_utama">
															<input type="hidden" id="example-cursor" value="-webkit-zoom-in">
															<div id="svgselect" style="width: 610px; height: 230px; background-color: #ffffff;margin-left: 15px;margin-bottom: 385px;">
																<!-- background-color:red -->


																<svg version="1.1" height="140%" width="100%" style="overflow-x: scroll;">
																	<g transform="scale(1.5)" id="odontograma">

																	</g>
																</svg>

																<br /><br />
																<div class='col-sm-12'>
																	<div class='col-sm-3'>
																		<!-- <button id="btn_clone">Click Me!</button> -->
																		<div id="controls" class="panel panel-default">
																			<div class="panel-body">

																				<svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;" id="parentDiv">

																					<g transform="scale(4.60),translate(0,0)" id="b_clone">
																						aaa
																					</g>

																				</svg>

																				<!-- <svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;"  ><ul id="b_clone"><li></li></ul></svg> -->
																			</div>
																			<button data-toggle="tab" href="#pilih_jadwal" type="button" class="btn salmon stil" style="float: left;margin-top: 42%;">Kembali</button>
																		</div>

																	</div>
																	<div class='col-sm-5'>
																		<div id="controls3" class="panel panel-default">
																			<div class="panel-body" style='padding: 4px;'>
																				<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																					<!-- <p style="margin-left: 17px;">
																				<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																						<input type="radio" name="options" id="option12" autocomplete="off"> <p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg') ?>" style="width: 100px;position: inherit;right: -19px;">
																				</div>
																			</p> -->
																					<table class="table table-bordered" style='margin-bottom: 13px;'>
																						<tr>
																							<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Keadaan Gigi</th>
																							<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Restorasi dan Protesa</th>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="non" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option14" style="position: fixed;opacity: 0;pointer-events: none;">non</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="att" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option15" style="position: fixed;opacity: 0;pointer-events: none;">att</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="gif" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option16" style="position: fixed;opacity: 0;pointer-events: none;">gif</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="pon" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option17" style="position: fixed;opacity: 0;pointer-events: none;">pon</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="une" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option18" style="position: fixed;opacity: 0;pointer-events: none;">une</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="abr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option19" style="position: fixed;opacity: 0;pointer-events: none;">abr</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="inl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option20" style="position: fixed;opacity: 0;pointer-events: none;">inl</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="abu" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option21" style="position: fixed;opacity: 0;pointer-events: none;">abu</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="pre" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option22" style="position: fixed;opacity: 0;pointer-events: none;">pre</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="cfr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option23" style="position: fixed;opacity: 0;pointer-events: none;">cfr</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="onl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option24" style="position: fixed;opacity: 0;pointer-events: none;">onl</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="prd" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option25" style="position: fixed;opacity: 0;pointer-events: none;">prd</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="imv" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option26" style="position: fixed;opacity: 0;pointer-events: none;">imv</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="rrx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option27" style="position: fixed;opacity: 0;pointer-events: none;">rrx</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="mpc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option28" style="position: fixed;opacity: 0;pointer-events: none;">mpc</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="fld" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option29" style="position: fixed;opacity: 0;pointer-events: none;">fld</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="ano" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option30" style="position: fixed;opacity: 0;pointer-events: none;">ano</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="miss" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option31" style="position: fixed;opacity: 0;pointer-events: none;">mis</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="gmc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option32" style="position: fixed;opacity: 0;pointer-events: none;">gmc</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="acr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option33" style="position: fixed;opacity: 0;pointer-events: none;">acr</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="dia" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option34" style="position: fixed;opacity: 0;pointer-events: none;">dia</div>
																							</td>
																							<td></td>
																							<td style='font-size: 9px;'>
																								<div id="ipx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option35" style="position: fixed;opacity: 0;pointer-events: none;">ipx</div>
																							</td>
																							<td></td>
																						</tr>
																					</table>
																				</div>

																			</div>
																		</div>
																	</div>
																	<div class='col-sm-4'>
																		<div id="controls2" class="panel panel-default" style="margin-bottom: 270px;">
																			<div class="panel-body">
																				<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																					<p style="margin-left: 17px;">
																						<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																							<input type="radio" name="options" id="option12" autocomplete="off">
																							<p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg') ?>" style="width: 100px;position: inherit;right: -19px;">
																						</div>
																					</p>
																					<p style="margin-left: 17px;">
																						<div id="porcelain" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																							<input type="radio" name="options" id="option13" autocomplete="off">
																							<p style="margin-left: 14px;"><b>Porcelain Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge2.jpg') ?>" style="width: 121px;position: inherit;right: -7px;">
																						</div>
																					</p>

																				</div>
																			</div>
																			<button data-toggle="tab" href="#keluhan" type="button" class="btn salmon stil" style="margin-top: 13%;" onclick="save_temp()">Selanjutnya</button>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td colspan="2">
														<div id="message" style="height:20px">
														</div>
													</td>
												</tr>
											</tbody>
										</table>

										<script>
											var base_url = '<?php echo base_url() ?>';
										</script>

										<script src="<?php echo base_url(); ?>assets/js/apps/rawat-tambah.js"></script>

										<script type="text/javascript">
											var link2 = "<?php echo base_url() ?>";
											var link = "<?php echo base_url() ?>";
											var id_pemeriksaan2 = "<?php echo @$idpemeriksaan ?>";
											var id_pasien2 = "<?php echo $id_pasien ?>";
											var id_pemeriksaan = "<?php echo @$idpemeriksaan ?>";
											var id_pasien = "<?php echo $id_pasien ?>";
											var date_awal = "<?php echo date("Y-m-d") ?>";
											var odontogramDataUtama2 = '<?php echo @$rawat['odontogram'];; ?>';
											var date = "<?php echo date('Y-m-d') ?>";
											$(document).ready(function() {

												app_rawat_tambah.init();

											});
										</script>
									</div>
									<!-- <button type="button" id="simpanUser" onclick="saveHeaderRawat('add');" class="btn salmon stil" style="float: left;margin-top: 25%;">Coba Simpan</button> -->

								</div>
								<div id="keluhan" class="tab-pane fade">
									<div id="keluhan1">
										<div class="col-md-12">
											<button data-toggle="tab" href="#" type="button" id="filter_pemeriksaan_umum" class="btn salmon" style="float: right;margin-top: 1%;"><i class="lnr lnr-calendar-full"></i> Filter Tanggal Pemeriksaan</button><input type="text" class="form-control" name="filter_date" id="filter_date" style="float: right;margin-top: 1%;width: 28%;margin-left: 1%;margin: 6px;">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Pemeriksaan Klinis Umum</h5><br>
										</div>
										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Pemeriksaan Ekstra Oral</h5><br>
										</div>

										<div class="col-lg-2">
											<b>Wajah</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="wajah" id="simetri" required value="Simetri"> Simetri
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group ">
												<input type='radio' class="" rows="3" name="wajah" id="asimetri" value="Asimetri"> Asimetri
											</div>
										</div>

										<div class="col-lg-12"></div>

										<div class="col-lg-2">
											<b>Bibir</b>
										</div>


										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="bibir1" id="normal" required value="Normal"> Normal
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="bibir1" id="lainnya" value=""> Lainnya :
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="bibir2" id="lainnya_isi">
											</div>
										</div>

										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Kelenjar Getah Bening</h5><br>
										</div>

										<div class="col-lg-2">
											<b>Submandibula kanan</b>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kanan1" id="teraba" required value="Teraba"> Teraba
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="subkanan_kondisi" id="lunak" placeholder="Lunak/Kenyal/Keras">
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kanan1" id="tidak_teraba" value="Tidak Teraba"> Tidak Teraba
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kanan2" id="sakit" value="Sakit"> Sakit
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kanan2" id="tidak_sakit" value="Tidak Sakit"> Tidak Sakit
											</div>
										</div>

										<div class="col-lg-12"></div>

										<div class="col-lg-2">
											<b>Submandibula kiri</b>
										</div>



										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kiri1" id="teraba2" required value="Teraba"> Teraba
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="subkiri_kondisi" id="lunak2" placeholder="Lunak/Kenyal/Keras">
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kiri1" id="tidak_teraba2" value="Tidak Teraba"> Tidak Teraba
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kiri2" id="sakit2" value="Sakit"> Sakit
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="submandibula_kiri2" id="tidak_sakit2" value="Tidak Sakit"> Tidak Sakit
											</div>
										</div>


										<div class="col-lg-12"></div>

										<div class="col-lg-2">Lainnya</div>



										<div class="col-lg-8">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="lainnya" id="lainnya_umum">
											</div>
										</div>


										<div class="col-lg-12">
										</div>

										<button data-toggle="tab" href="#data_diri" type="button" class="btn salmon stil2" style="float: left;margin-top: 7%;">Kembali</button>
										<button onclick="sel1()" type="button" class="btn salmon" style="float: right; margin-top: 7%;">Selanjutnya</button>

									</div>
									<div id="keluhan2" hidden>
										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Pemeriksaan Intra Oral</h5><br>
										</div>

										<div class="col-lg-2">
											<b>Gingiva</b>
										</div>


										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="gingiva1" id="normal_gingiva1" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="gingiva1" value="" id="ada_kelainan_gingiva1"> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="gingiva2" id="ada_kelainan_gingiva2">
											</div>
										</div>


										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Debris</b>
										</div>


										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="debris1" id="debris1_normal" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="debris1" id="debris1_kelainan" value=""> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="debris2" id="debris2_normal">
											</div>
										</div>

										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Stain</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="stain" id="stain_ada" required value="Ada"> Ada
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="stain" id="stain_tidak_ada" value="Tidak Ada"> Tidak Ada
											</div>
										</div>


										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Kalkulus</b>
										</div>



										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="kalkulus" id="kalkulus_tidak_ada" required value="Tidak Ada"> Tidak Ada
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="kalkulus" id="kalkulus_subginggiva" value="Subgingiva"> Subgingiva
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="kalkulus" id="kalkulus_supraginggiva" value="Supragingiva"> Supragingiva
											</div>
										</div>


										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Mukosa</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="mukosa1" id="mukosa1_normal" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="mukosa1" id="mukosa1_ada_kelainan" value=""> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="mukosa2" id="mukosa2">
											</div>
										</div>

										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Palatum</b>
										</div>



										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="palatum1" id="palatum1_normal" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="palatum1" id="palatum1_ada_kelainan" value=""> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="palatum2" id="palatum2">
											</div>
										</div>

										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Lidah</b>
										</div>



										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="lidah1" id="lidah1_normal" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="lidah1" id="lidah1_ada_kelainan" value=""> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="lidah2" id="lidah2">
											</div>
										</div>

										<div class="col-md-12"></div>

										<button onclick="kem2()" type="button" class="btn salmon" style="float: left;  margin-top: 4%;">Kembali</button>
										<button onclick="sel2()" type="button" class="btn salmon" style="float: right;  margin-top: 4%;">Selanjutnya</button>
									</div>
									<div id="keluhan3" hidden>
										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Dasar Mulut</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="dasar_mulut1" id="dasar_mulut1_normal" required value="Normal"> Normal
											</div>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="dasar_mulut1" id="dasar_mulut1_ada_kelainan" value=""> Ada Kelainan :
											</div>
										</div>

										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="dasar_mulut2" id="dasar_mulut2">
											</div>
										</div>

										<!-- Hubungan Rahang kurang foreach -->
										<div class="col-md-12"></div>
										<div class="col-lg-2">
											<b>Hubungan Rahang</b>
										</div>

										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="hubungan_rahang" id="hubungan_rahang_ortognati" required value="Ortognati"> Ortognati
											</div>
										</div>
										<div class="col-lg-4 text-center">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="hubungan_rahang" id="hubungan_rahang_retrognati" value="Retrognati"> Retrognati
											</div>
										</div>
										<div class="col-lg-4">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="hubungan_rahang" value="Prognati" id="hubungan_rahang_prognati"> Prognati
											</div>
										</div>
										<!-- kelainan gigi geligi foreach belum -->
										<div class="col-md-12" style="margin-top:10px"></div>
										<div class="col-lg-2">
											<b>Kelainan Gigi Geligi</b>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="kelainan_gigi_geligi1" id="kelainan_gigi_geligi1_normal" required value="Normal"> Normal
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="kelainan_gigi_geligi1" id="kelainan_gigi_geligi1_ada_kelainan" value=""> Ada Kelainan :
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="kelainan_gigi_geligi2" id="kelainan_gigi_geligi2">
											</div>
										</div>
										<!-- lainnya foreach juga belum -->
										<div class="col-lg-12"></div>

										<div class="col-lg-2">Lainnya</div>

										<div class="col-lg-10">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="lainnya" value="">
											</div>
										</div>


										<div class="col-md-12"></div>
										<div class="col-md-12">
											<button data-toggle="tab" id="filter_pemeriksaan_khusus" type="button" class="btn salmon" style="float: right;margin-top: 1%;"><i class="lnr lnr-calendar-full"></i> Filter Tanggal Pemeriksaan</button><input type="text" class="form-control" name="filter_date2" id="filter_date2" style="float: right;margin-top: 1%;width: 28%;margin-left: 1%;margin: 6px;">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Pemeriksaan Klinis Khusus</h5><br>
										</div>




										<div class="col-lg-12">
											<div class="form-group">
												<textarea name="keterangan_khusus" id="keterangan_khusus" class="form-control" placeholder="46 Only, vitalitas(+), perkusi(+), palpasi(-)." rows="10" required></textarea>
											</div>
										</div>


										<button onclick="kem3()" type="button" class="btn salmon" style="float: left;  margin-top: 10%;">Kembali</button>
										<button onclick="sel3()" type="button" class="btn salmon" style="float: right;  margin-top: 10%;">Selanjutnya</button>
									</div>
									<div id="keluhan4" hidden>
										<div class="col-md-12">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Pemeriksaan Penunjang</h5><br>
										</div>
										<div class="col-md-12">
											<button data-toggle="tab" id="filter_pemeriksaan_penunjang" type="button" class="btn salmon" style="float: right;margin-top: 1%;"><i class="lnr lnr-calendar-full"></i> Filter Tanggal Pemeriksaan</button><input type="text" class="form-control" name="filter_date3" id="filter_date3" style="float: right;margin-top: 1%;width: 28%;margin-left: 1%;margin: 6px;">
											<h5 class="mb-20 weight-500" style="font-weight: bold">Radiologi</h5><br>
										</div>



										<div class="col-lg-2">
											<div class="form-group">
												<input type='checkbox' class="" rows="3" name="panoramik" id="panoramik" value="Panoramik"> Panoramik
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='checkbox' class="" rows="3" name="sefalometri" id="sefalometri" value="Sefalometri"> Sefalometri
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='checkbox' class="" rows="3" name="transcranial" id="transcranial" value="Transcranial"> Transcranial
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='checkbox' class="" rows="3" name="dental_regio" id="dental_regio" value="Dental Regio"> Dental,Regio
											</div>
										</div>
										<div class="col-lg-4" style="float: right;">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="gigi" id="gigi" placeholder="46">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<textarea name="keterangan_radiologi" id="keterangan_radiologi" class="form-control" placeholder="Tampak gambaran radiopak ada oklusal gigi 46 hingga dentin dalam. Tampak gambaran radiolusensi berbatas diffuse pada apical seluas kurang lebih 4 mm." rows="5"></textarea>
											</div>
										</div>

										<div class="col-lg-12"> </div>
										<div class="col-lg-4">
											<div class="form-group">
												<form id="upload_form" class="form-horizontal" role="form" method="POST" enctype="multipart/form-data">
													<input type="hidden" name="id_pemeriksaan_penunjang" id="id_pemeriksaan_penunjang" />
													<input type="hidden" name="foto_radiologi_download" id="foto_radiologi_download" />
													<input type="submit" id="btnUpdate" class="btn salmon" style="position: absolute; margin-top: 1%; cursor: default;" value="Upload Foto Baru">
													<input type="file" class="form-control" style="margin-left: 130px; margin-top: 1%; cursor: pointer;" id="foto_radiologi" name="foto_radiologi">
												</form>
											</div>
										</div>
										<button data-toggle="tab" onclick="download()" type="button" class="btn salmon " style="float: right;margin-top: 1%;">Download Foto Terupdate</button>
										<div class="col-lg-12"> </div>
										<button onclick="kem4()" type="button" class="btn salmon" style="float: left;  margin-top: 15%;">Kembali</button>
										<button onclick="sel4()" type="button" class="btn salmon" style="float: right;  margin-top: 15%;">Selanjutnya</button>
									</div>
									<div id="keluhan5" hidden>
										<div class="col-md-12">
											<button data-toggle="tab" id="filter_pemeriksaan_penunjang_lab" type="button" class="btn salmon" style="float: right;margin-top: 1%;"><i class="lnr lnr-calendar-full"></i> Filter Tanggal Pemeriksaan</button><input type="text" class="form-control" name="filter_date4" id="filter_date4" style="float: right;margin-top: 1%;width: 28%;margin-left: 1%;margin: 6px;">

											<h5 class="mb-20 weight-500" style="font-weight: bold">Laboratorium</h5><br>
										</div>





										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="laboratorium1" id="laboratorium1_darah_rutin" value="Darah Rutin"> Darah Rutin
											</div>
										</div>
										<div class="col-lg-2">
											<div class="form-group">
												<input type='radio' class="" rows="3" name="laboratorium1" id="laboratorium1_lainnya" value=""> Lainnya
											</div>
										</div>
										<div class="col-lg-8">
											<div class="form-group">
												<input type='text' class="form-control" rows="3" name="laboratorium2" id="laboratorium2">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<textarea name="keterangan_laboratorium" id="keterangan_laboratorium" class="form-control" placeholder="Tidak ada" rows="5"></textarea>
											</div>
										</div>


										<div class="col-lg-12"> </div>
										<div class="col-lg-4">
											<div class="form-group">
												<form id="upload_form2" class="form-horizontal" role="form" method="POST" enctype="multipart/form-data">
													<input type="hidden" name="id_pemeriksaan_penunjang2" id="id_pemeriksaan_penunjang2" />
													<input type="hidden" name="foto_laboratorium_download" id="foto_laboratorium_download" />
													<input type="submit" id="btnUpdate" class="btn salmon " style="position: absolute; margin-top: 1%; cursor: default;" value="Upload Foto Baru">
													<input type="file" class="form-control" style="margin-left: 130px; margin-top: 1%; cursor: pointer;" id="foto_laboratorium" name="foto_laboratorium">
												</form>
											</div>
										</div>
										<button data-toggle="tab" onclick="download_lab()" type="button" class="btn salmon " style="float: right;margin-top: 1%;">Download Foto Terupdate</button>

										<div class="col-lg-12"> </div>
										<button onclick="kem5()" type="button" class="btn salmon" style="float: left;  margin-top: 25%;">Kembali</button>
										<button data-toggle="tab" href="#metode_pembayaran" type="button" class="btn salmon stil4" style="float: right;margin-top: 25%;">Selanjutnya</button>
									</div>
								</div>
								<div id="metode_pembayaran" class="tab-pane fade">
									<div class="col-md-12">
										<h5 class="mb-20 weight-500" style="font-weight: bold">Diagnosa</h5><br>
									</div>
									<div class="col-lg-12">
										<div class="form-group">
											<textarea name="diagnosis" class="form-control" placeholder="Jelaskan secara detail diagnosa" rows="10" required></textarea>
										</div>
									</div>
									<button data-toggle="tab" href="#keluhan" type="button" class="btn salmon stil3" style="float: left;margin-top: 25%;">Kembali</button>
									<button data-toggle="tab" href="#konfirmasi_booking" type="button" class="btn salmon stil5" style="float: right;margin-top: 25%;">Selanjutnya</button>
								</div>

								<div id="konfirmasi_booking" class="tab-pane fade">
									<div class="col-md-12">
										<h5 class="mb-20 weight-500" style="font-weight: bold">Perawatan / Tindakan</h5><br>
									</div>
									<table id="all_data_json" class="table">
										<thead>
											<tr>
												<th data-sortable="true">Elemen Gigi</th>
												<th data-sortable="true">Tindakan</th>
												<th data-sortable="true">Detail Tindakan</th>
												<th data-sortable="true">Jumlah</th>
												<th data-sortable="true">Harga Satuan</th>
												<th data-sortable="true">Subtotal</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><input type="text" class="form-control" name="elemen_gigi" id="elemen_gigi" style="width: 50px;"></td>
												<td>
													<select class="form-control" name="id_layanan" id="layanan" required>
														<option value="" disabled selected style="display: none;">-- Pilih Layanan --</option>
														<?php foreach ($layanan->result() as $key) : ?>
															<option value="<?= $key->id_layanan ?>"><?php echo $key->layanan ?></option>
														<?php endforeach ?>
													</select>
													<!-- <input type="hidden" name="id_layanan" value="<?php echo $key->id_layanan; ?>"> -->
												</td>
												<td><input type="text" class="form-control" rows="3" name="detail_layanan"></td>
												<td>

													<select class="form-control" name="jumlah" id="jumlah" required>
														<option value="0" disabled selected style="display: none;">-- Jumlah Treatment --</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
														<option value="6">6</option>
														<option value="7">7</option>
														<option value="8">8</option>
														<option value="9">9</option>
														<option value="10">10</option>
													</select>
												</td>
												<td id="txtlayanan"></td>
												<td id="txttotal"></td>

											</tr>
										</tbody>
									</table>
									<div class="col-lg-12" style="background: #ccc; color: #000; padding: 7px 0 6px 10px;">
										<b>TOTAL : <p style="float: right; color: #000; margin: 0 0px 0 0;">Rp. <input type="text" class="" rows="3" name="subtotal" id="txttot" style="float:right; color:#000; margin-left: 3px;  width: 65px; border: 0px; background: #ccc;"></p></b>
									</div>
									<div class="col-lg-2" style="margin :20px 0 10px 0;">
										Discount / Coupon :
									</div>
									<div class="col-lg-6" style="margin :20px 0 10px 0;">
										<div class="form-group">
											<select class="form-control" name="id_diskon" id="diskon" required>
												<option value="" disabled selected style="display: none;">-- Pilih Diskon --</option>
												<?php foreach ($diskon->result() as $disk) : ?>
													<option value="<?= $disk->id_diskon ?>"><?php echo $disk->nama_diskon ?></option>
												<?php endforeach ?>
											</select>
										</div>
									</div>
									<div class="col-lg-12"></div>
									<div class="col-lg-12" style="background: #f40049; color: #fff; padding: 7px 0 7px 10px;">
										<b>GRAND TOTAL : <p style="float: right; color: #fff; margin: 0 0px 0 0;">Rp. <input type="text" class="" rows="3" name="grandtotal" id="txtgrand" style="float:right; color:#fff; margin-left: 3px;  width: 65px; border: 0px; background: #f40049;"></p></b>
									</div>
									<button data-toggle="tab" href="#metode_pembayaran" type="button" class="btn salmon stil4" style="float: left;margin-top: 25%;">Kembali</button>
									<button data-toggle="tab" href="#odontogram_after" type="button" class="btn salmon stil6" style="float: right;margin-top: 25%;">Selanjutnya</button>
								</div>
								<div id="odontogram_after" class="tab-pane fade">
									<div class="col-md-12">
										<h5 class="mb-20 weight-500" style="font-weight: bold">Odontogram After</h5><br>
										<table style="width: 100%">
											<tbody>

												<tr>
													<td>
														<div id="controls_after" class="panel panel-default" style="margin-bottom: 270px;">
															<div class="panel-body">
																<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																	<p>

																		<div id="kariesSuperfisia_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 3px 0px;" onclick="zoom()">
																			<input type="radio" name="options" id="option21" checked><img src="<?php echo base_url('assets/images/icon/panah.jpg') ?>" style="width: 24px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia2_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option2" checked><img src="<?php echo base_url('assets/images/icon/2.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<br />
																	<p>
																		<div id="kariesSuperfisia3_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option3" checked> <img src="<?php echo base_url('assets/images/icon/3.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia12_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option13" checked> <img src="<?php echo base_url('assets/images/icon/41.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia13_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option14" checked> <img src="<?php echo base_url('assets/images/icon/42.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia14_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option15" checked> <img src="<?php echo base_url('assets/images/icon/43.jpg') ?>" style="width: 31px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia4_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option4" checked><img src="<?php echo base_url('assets/images/icon/4.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia5_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option5" checked><img src="<?php echo base_url('assets/images/icon/5.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia6_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option7" checked><img src="<?php echo base_url('assets/images/icon/6.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia7_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option8" checked><img src="<?php echo base_url('assets/images/icon/7.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia8_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option9" checked><img src="<?php echo base_url('assets/images/icon/8.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia9_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option10" checked><img src="<?php echo base_url('assets/images/icon/9.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia10_after" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 5px 0px;" onclick="defaulton()">
																			<input type="radio" name="options" id="option11" checked><img src="<?php echo base_url('assets/images/icon/10.jpg') ?>" style="width: 28px;">
																		</div>
																	</p>
																	<p>
																		<div id="kariesSuperfisia11_after" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																			<input type="radio" name="options" id="option6" autocomplete="off"><img src="<?php echo base_url('assets/images/icon/11.jpg') ?>" style="width: 28px;" onclick="defaulton()">
																		</div>
																	</p>
																	<!-- <p>
														<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																	<input type="radio" name="options" id="option12" autocomplete="off"> Sambungkan
																</div>
														</p> -->
																</div>
															</div>
													</td>
													<td>
														<!-- <div id="controls2" class="panel panel-default">
														<div class="panel-body">
															<div class="btn-group" data-toggle="buttons">
																
																<label id="puente" class="btn btn-primary">
																	<input type="radio" name="options" id="option5" autocomplete="off"> Puente
																</label>
															</div>
														</div>
													</div> -->
														<!-- <button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;right: -7px;" type="button" ><i class="fa fa-reply"></i> Undo</button>

													<button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;right: -4px;" type="button" ><i class="fa fa-share"></i> Redo</button>
													<button class="btn gray col-sm-3" style="float: right; width: 100px;background-color: gray;color:#fff;" type="button" ><i class="fas fa-redo-alt"></i> Reset</button> -->
														<form method="get">
															<div class="col-md-12">
																<div class="col-md-4">
																	<input type="text" class="form-control" id="tgl_awal" name="tgl_awal" autocomplete="off">
																</div>
																<!-- <div class="col-md-4">	
															<input type="text" class="form-control" id="tgl_akhir" name="tgl_akhir">
														</div> -->
																<div class="col-md-3">
																	<button type="button" id="cari" name="cari" onclick="load_odontogram()">Filter</button>
																</div>
															</div>
														</form>
														<div class="col-sm-2"></div>
														<br /><br />
														<div id="kota2"></div>
														<div id="odontogram_utama2">
															<input type="hidden" id="example-cursor" value="-webkit-zoom-in">
															<div id="svgselect" style="width: 610px; height: 230px; background-color: #ffffff;margin-left: 15px;margin-bottom: 385px;">
																<!-- background-color:red -->


																<svg version="1.1" height="140%" width="100%" style="overflow-x: scroll;">
																	<g transform="scale(1.5)" id="odontograma2">

																	</g>
																</svg>

																<br /><br />
																<div class='col-sm-12'>
																	<div class='col-sm-3'>
																		<!-- <button id="btn_clone">Click Me!</button> -->
																		<div id="controls" class="panel panel-default">
																			<div class="panel-body">

																				<svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;" id="parentDiv_after">

																					<g transform="scale(4.60),translate(0,0)" id="b_clone2">
																						aaa
																					</g>

																				</svg>

																				<!-- <svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;"  ><ul id="b_clone"><li></li></ul></svg> -->
																			</div>
																			<!-- <button data-toggle="tab" href="#pilih_jadwal" type="button" class="btn salmon stil" style="float: left;margin-top: 42%;">Kembali</button> -->
																		</div>

																	</div>
																	<div class='col-sm-5'>
																		<div id="controls3_after" class="panel panel-default">
																			<div class="panel-body" style='padding: 4px;'>
																				<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																					<!-- <p style="margin-left: 17px;">
																				<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																						<input type="radio" name="options" id="option12" autocomplete="off"> <p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg') ?>" style="width: 100px;position: inherit;right: -19px;">
																				</div>
																			</p> -->
																					<table class="table table-bordered" style='margin-bottom: 13px;'>
																						<tr>
																							<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Keadaan Gigi</th>
																							<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Restorasi dan Protesa</th>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="non" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option14" style="position: fixed;opacity: 0;pointer-events: none;">non</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="att" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option15" style="position: fixed;opacity: 0;pointer-events: none;">att</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="gif" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option16" style="position: fixed;opacity: 0;pointer-events: none;">gif</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="pon" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option17" style="position: fixed;opacity: 0;pointer-events: none;">pon</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="une" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option18" style="position: fixed;opacity: 0;pointer-events: none;">une</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="abr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option19" style="position: fixed;opacity: 0;pointer-events: none;">abr</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="inl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option20" style="position: fixed;opacity: 0;pointer-events: none;">inl</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="abu" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option21" style="position: fixed;opacity: 0;pointer-events: none;">abu</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="pre" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option22" style="position: fixed;opacity: 0;pointer-events: none;">pre</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="cfr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option23" style="position: fixed;opacity: 0;pointer-events: none;">cfr</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="onl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option24" style="position: fixed;opacity: 0;pointer-events: none;">onl</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="prd" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option25" style="position: fixed;opacity: 0;pointer-events: none;">prd</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="imv" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option26" style="position: fixed;opacity: 0;pointer-events: none;">imv</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="rrx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option27" style="position: fixed;opacity: 0;pointer-events: none;">rrx</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="mpc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option28" style="position: fixed;opacity: 0;pointer-events: none;">mpc</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="fld" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option29" style="position: fixed;opacity: 0;pointer-events: none;">fld</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="ano" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option30" style="position: fixed;opacity: 0;pointer-events: none;">ano</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="miss" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option31" style="position: fixed;opacity: 0;pointer-events: none;">mis</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="gmc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option32" style="position: fixed;opacity: 0;pointer-events: none;">gmc</div>
																							</td>
																							<td style='font-size: 9px;'>
																								<div id="acr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option33" style="position: fixed;opacity: 0;pointer-events: none;">acr</div>
																							</td>
																						</tr>
																						<tr>
																							<td style='font-size: 9px;'>
																								<div id="dia" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option34" style="position: fixed;opacity: 0;pointer-events: none;">dia</div>
																							</td>
																							<td></td>
																							<td style='font-size: 9px;'>
																								<div id="ipx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option35" style="position: fixed;opacity: 0;pointer-events: none;">ipx</div>
																							</td>
																							<td></td>
																						</tr>
																					</table>
																				</div>

																			</div>
																		</div>
																	</div>
																	<div class='col-sm-4'>
																		<div id="controls2_after" class="panel panel-default" style="margin-bottom: 270px;">
																			<div class="panel-body">
																				<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																					<p style="margin-left: 17px;">
																						<div id="sambung_after" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																							<input type="radio" name="options" id="option12" autocomplete="off">
																							<p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg') ?>" style="width: 100px;position: inherit;right: -19px;">
																						</div>
																					</p>
																					<p style="margin-left: 17px;">
																						<div id="porcelain_after" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																							<input type="radio" name="options" id="option13" autocomplete="off">
																							<p style="margin-left: 14px;"><b>Porcelain Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge2.jpg') ?>" style="width: 121px;position: inherit;right: -7px;">
																						</div>
																					</p>

																				</div>
																			</div>
																			<!-- <button data-toggle="tab" href="#keluhan" type="button" class="btn salmon stil" style="margin-top: 13%;">Selanjutnya</button> -->
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td colspan="2">
														<div id="message" style="height:20px">
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										<script src="<?php echo base_url(); ?>assets/js/apps/rawat-tambah-after.js"></script>

										<script type="text/javascript">
											var link2 = "<?php echo base_url() ?>";
											var id_pemeriksaan2 = "<?php echo @$idpemeriksaan ?>";
											var id_pasien2 = "<?php echo $id_pasien ?>";
											var date = "<?php echo date('Y-m-d') ?>";
											var odontogramDataUtama = '<?php echo @$rawat['odontogram'];; ?>';
											$(document).ready(function() {

												app_rawat_tambah_after.init();

											});
										</script>
									</div>
									<button data-toggle="tab" href="#konfirmasi_booking" type="button" class="btn salmon stil5" style="float: left;margin-top: 25%;">Kembali</button>
									<button type="button" id="simpanUser" onclick="saveHeaderRawat('add');" class="btn salmon" style="float: right;margin-top: 25%;">Kirim</button>
								</div>

							</div>
						</form>
					</div>

				</div>

			</div>
		</div><!-- /.col-->
	</div><!-- /.row -->

</div>
<!--/.main-->
<script>
	var base_url = '<?php echo base_url() ?>';
	var session_id = '<?php echo $id_kpesan; ?>';
	var kode_pasien = '<?php echo $id_pasien ?>';
	$(document).ready(function() {

		//	swal({ title:"SUCCESS", text:"Berhasil", type: "success", closeOnConfirm: true}); 
		$('#layanan').change(function() {
			// let a = $(this).val();
			// console.log(a);
			pil_layanan();
		});

		tampil_pemeriksaan_umum(0, kode_pasien);
		tampil_pemeriksaan_khusus(0, kode_pasien);
		tampil_pemeriksaan_penunjang(0, kode_pasien);
		tampil_pemeriksaan_penunjang_lab(0, kode_pasien);

		$('#upload_form2').on('submit', function(e) {
			console.log('ada');
			e.preventDefault();
			if ($('#foto_laboratorium').val() == '') {
				alert("Please Select the File");
			} else {
				//console.log('upload',new FormData(this));
				$.ajax({
					url: "<?php echo base_url(); ?>Doctor/upload_laboratorium",
					method: "POST",
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData: false,
					dataType: "json",
					success: function(res) {
						// console.log(res.success);
						if (res.status) {
							swal_berhasil();
						} else {
							swal_error(res.error);
						}

					}
				});
			}
		});

		$('#upload_form').on('submit', function(e) {
			e.preventDefault();
			if ($('#foto_radiologi').val() == '') {
				alert("Please Select the File");
			} else {
				//console.log('upload',new FormData(this));
				$.ajax({
					url: "<?php echo base_url(); ?>Doctor/upload_radiologi",
					method: "POST",
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData: false,
					dataType: "json",
					success: function(res) {
						// console.log(res.success);
						if (res.status) {
							swal_berhasil();
						} else {
							swal_error(res.error);
						}

					}
				});
			}
		});


	});

	function download() {
		let foto = $('#foto_radiologi_download').val();
		window.location.href = "<?php echo base_url() . 'Doctor/download_radiologi/' ?>" + foto;
	}

	function download_lab() {
		let foto = $('#foto_laboratorium_download').val();
		window.location.href = "<?php echo base_url() . 'Doctor/download_lab/' ?>" + foto;
	}

	function swal_berhasil() {
		swal({
			title: "SUCCESS",
			text: "Berhasil",
			type: "success",
			closeOnConfirm: true
		});
	}

	function swal_error(msg) {
		swal({
			title: "ERROR",
			text: msg,
			type: "warning",
			closeOnConfirm: true
		});
	}

	$("#filter_pemeriksaan_umum").click(function() {
		tampil_pemeriksaan_umum($('#filter_date').val(), kode_pasien);
	});

	$("#filter_pemeriksaan_khusus").click(function() {
		tampil_pemeriksaan_khusus($('#filter_date2').val(), kode_pasien);
	});

	$("#filter_pemeriksaan_penunjang").click(function() {
		tampil_pemeriksaan_penunjang($('#filter_date3').val(), kode_pasien);
	});

	$("#filter_pemeriksaan_penunjang_lab").click(function() {
		tampil_pemeriksaan_penunjang_lab($('#filter_date4').val(), kode_pasien);
	});

	function tampil_pemeriksaan_umum(tgl, kode_pasien) {
		$.ajax({
			url: base_url + "Doctor/get_pemeriksaan_klinis/" + tgl + '/' + kode_pasien,
			type: "GET",
			dataType: "JSON",
			success: function(result) {
				console.log('result', result);
				// var idrekammedis = result.id_rekam_medis;
				// console.log(idrekammedis);
				if (result == null) {
					$("#simetri").prop("checked", false);
					$("#asimetri").prop("checked", false);
					$("#normal").prop("checked", false);
					$('#lainnya_isi').val('');
					$("#lainnya").prop("checked", false);
					$("#teraba").prop("checked", false);
					$('#lunak').val('');
					$("#tidak_teraba").prop("checked", false);
					$("#sakit").prop("checked", false);
					$("#tidak_sakit").prop("checked", false);
					$("#teraba2").prop("checked", false);
					$('#lunak2').val('');
					$("#tidak_teraba2").prop("checked", false);
					$("#sakit2").prop("checked", false);
					$("#tidak_sakit2").prop("checked", false);
					$('#lainnya_umum').val('');
					$("#normal_gingiva1").prop("checked", false);
					$('#gingiva').val('');
					$("#ada_kelainan_gingiva1").prop("checked", false);
					$("#debris1_normal").prop("checked", false);
					$('#debris2_normal').val('');
					$("#debris1_kelainan").prop("checked", false);
					$("#stain_ada").prop("checked", false);
					$("#stain_tidak_ada").prop("checked", false);
					$("#kalkulus_tidak_ada").prop("checked", false);
					$("#kalkulus_subginggiva").prop("checked", false);
					$("#kalkulus_supraginggiva").prop("checked", false);
					$("#mukosa1_normal").prop("checked", false);
					$('#mukosa2').val('');
					$("#mukosa1_ada_kelainan").prop("checked", false);
					$("#palatum1_normal").prop("checked", false);
					$('#palatum2').val('');
					$("#palatum1_ada_kelainan").prop("checked", false);
					$("#lidah1_normal").prop("checked", false);
					$('#lidah2').val('');
					$("#lidah1_ada_kelainan").prop("checked", false);
					$("#dasar_mulut1_normal").prop("checked", false);
					$('#dasar_mulut2').val('');
					$("#dasar_mulut1_ada_kelainan").prop("checked", false);
					$("#hubungan_rahang_ortognati").prop("checked", false);
					$("#hubungan_rahang_retrognati").prop("checked", false);
					$("#hubungan_rahang_prognati").prop("checked", false);
					$("#kelainan_gigi_geligi1_normal").prop("checked", false);
					$('#kelainan_gigi_geligi2').val('');
					$("#kelainan_gigi_geligi1_ada_kelainan").prop("checked", false);
				} else {
					if (result.wajah == 'Simetri') {
						$("#simetri").prop("checked", true);
					} else {
						$("#simetri").prop("checked", false);
					}

					if (result.wajah == 'Asimetri') {
						$("#asimetri").prop("checked", true);
					} else {
						$("#asimetri").prop("checked", false);
					}

					if (result.bibir == 'Normal') {
						$("#normal").prop("checked", true);
					} else {
						$("#normal").prop("checked", false);
					}

					if (result.bibir != 'Normal') {
						$('#lainnya_isi').val(result.bibir);
						$("#lainnya").prop("checked", true);
					} else {
						$("#lainnya").prop("checked", false);
					}

					if (result.submandibula_kanan == 'Teraba' || result.submandibula_kanan == 'Teraba,Sakit' || result.submandibula_kanan == 'Teraba,Tidak Sakit') {
						$("#teraba").prop("checked", true);
					} else {
						$("#teraba").prop("checked", false);
					}

					$('#lunak').val(result.subkanan_kondisi);

					if (result.submandibula_kanan == 'Tidak Teraba' || result.submandibula_kanan == 'Tidak Teraba,Sakit' || result.submandibula_kanan == 'Tidak Teraba,Tidak Sakit') {
						$("#tidak_teraba").prop("checked", true);
					} else {
						$("#tidak_teraba").prop("checked", false);
					}

					if (result.submandibula_kanan == 'Sakit' || result.submandibula_kanan == 'Teraba,Sakit' || result.submandibula_kanan == 'Tidak Teraba,Sakit') {
						$("#sakit").prop("checked", true);
					} else {
						$("#sakit").prop("checked", false);
					}

					if (result.submandibula_kanan == 'Tidak Sakit' || result.submandibula_kanan == 'Teraba,Tidak Sakit' || result.submandibula_kanan == 'Tidak Teraba,Tidak Sakit') {
						$("#tidak_sakit").prop("checked", true);
					} else {
						$("#tidak_sakit").prop("checked", false);
					}

					if (result.submandibula_kiri == 'Teraba' || result.submandibula_kiri == 'Teraba,Sakit' || result.submandibula_kiri == 'Teraba,Tidak Sakit') {
						$("#teraba2").prop("checked", true);
					} else {
						$("#teraba2").prop("checked", false);
					}

					$('#lunak2').val(result.subkiri_kondisi);

					if (result.submandibula_kiri == 'Tidak Teraba' || result.submandibula_kiri == 'Tidak Teraba,Sakit' || result.submandibula_kiri == 'Tidak Teraba,Tidak Sakit') {
						$("#tidak_teraba2").prop("checked", true);
					} else {
						$("#tidak_teraba2").prop("checked", false);
					}

					if (result.submandibula_kiri == 'Sakit' || result.submandibula_kiri == 'Teraba,Sakit' || result.submandibula_kiri == 'Tidak Teraba,Sakit') {
						$("#sakit2").prop("checked", true);
					} else {
						$("#sakit2").prop("checked", false);
					}

					if (result.submandibula_kiri == 'Tidak Sakit' || result.submandibula_kiri == 'Teraba,Tidak Sakit' || result.submandibula_kiri == 'Tidak Teraba,Tidak Sakit') {
						$("#tidak_sakit2").prop("checked", true);
					} else {
						$("#tidak_sakit2").prop("checked", false);
					}

					$('#lainnya_umum').val(result.lainnya);

					if (result.gingiva == 'Normal') {
						$("#normal_gingiva1").prop("checked", true);
					} else {
						$("#normal_gingiva1").prop("checked", false);
					}

					if (result.gingiva != 'Normal') {
						$('#gingiva').val(result.bibir);
						$("#ada_kelainan_gingiva1").prop("checked", true);
					} else {
						$("#ada_kelainan_gingiva1").prop("checked", false);
					}

					if (result.debris == 'Normal') {
						$("#debris1_normal").prop("checked", true);
					} else {
						$("#debris1_normal").prop("checked", false);
					}

					if (result.debris != 'Normal') {
						$('#debris2_normal').val(result.debris);
						$("#debris1_kelainan").prop("checked", true);
					} else {
						$("#debris1_kelainan").prop("checked", false);
					}

					if (result.stain == 'Ada') {
						$("#stain_ada").prop("checked", true);
					} else {
						$("#stain_ada").prop("checked", false);
					}

					if (result.stain == 'Tidak Ada') {
						$("#stain_tidak_ada").prop("checked", true);
					} else {
						$("#stain_tidak_ada").prop("checked", false);
					}

					if (result.kalkulus == 'Tidak Ada') {
						$("#kalkulus_tidak_ada").prop("checked", true);
					} else {
						$("#kalkulus_tidak_ada").prop("checked", false);
					}

					if (result.kalkulus == 'Subgingiva') {
						$("#kalkulus_subginggiva").prop("checked", true);
					} else {
						$("#kalkulus_subginggiva").prop("checked", false);
					}

					if (result.kalkulus == 'Supragingiva') {
						$("#kalkulus_supraginggiva").prop("checked", true);
					} else {
						$("#kalkulus_supraginggiva").prop("checked", false);
					}

					if (result.mukosa == 'Normal') {
						$("#mukosa1_normal").prop("checked", true);
					} else {
						$("#mukosa1_normal").prop("checked", false);
					}

					if (result.mukosa != 'Normal') {
						$('#mukosa2').val(result.mukosa);
						$("#mukosa1_ada_kelainan").prop("checked", true);
					} else {
						$("#mukosa1_ada_kelainan").prop("checked", false);
					}

					if (result.palatum == 'Normal') {
						$("#palatum1_normal").prop("checked", true);
					} else {
						$("#palatum1_normal").prop("checked", false);
					}

					if (result.palatum != 'Normal') {
						$('#palatum2').val(result.palatum);
						$("#palatum1_ada_kelainan").prop("checked", true);
					} else {
						$("#palatum1_ada_kelainan").prop("checked", false);
					}

					if (result.lidah == 'Normal') {
						$("#lidah1_normal").prop("checked", true);
					} else {
						$("#lidah1_normal").prop("checked", false);
					}

					if (result.lidah != 'Normal') {
						$('#lidah2').val(result.lidah);
						$("#lidah1_ada_kelainan").prop("checked", true);
					} else {
						$("#lidah1_ada_kelainan").prop("checked", false);
					}

					if (result.dasar_mulut == 'Normal') {
						$("#dasar_mulut1_normal").prop("checked", true);
					} else {
						$("#dasar_mulut1_normal").prop("checked", false);
					}

					if (result.dasar_mulut != 'Normal') {
						$('#dasar_mulut2').val(result.dasar_mulut);
						$("#dasar_mulut1_ada_kelainan").prop("checked", true);
					} else {
						$("#dasar_mulut1_ada_kelainan").prop("checked", false);
					}

					if (result.hubungan_rahang == 'Ortognati') {
						$("#hubungan_rahang_ortognati").prop("checked", true);
					} else {
						$("#hubungan_rahang_ortognati").prop("checked", false);
					}

					if (result.hubungan_rahang == 'Retrognati') {
						$("#hubungan_rahang_retrognati").prop("checked", true);
					} else {
						$("#hubungan_rahang_retrognati").prop("checked", false);
					}

					if (result.hubungan_rahang == 'Prognati') {
						$("#hubungan_rahang_prognati").prop("checked", true);
					} else {
						$("#hubungan_rahang_prognati").prop("checked", false);
					}

					if (result.kelainan_gigi_geligi == 'Normal') {
						$("#kelainan_gigi_geligi1_normal").prop("checked", true);
					} else {
						$("#kelainan_gigi_geligi1_normal").prop("checked", false);
					}

					if (result.kelainan_gigi_geligi != 'Normal') {
						$('#kelainan_gigi_geligi2').val(result.kelainan_gigi_geligi);
						$("#kelainan_gigi_geligi1_ada_kelainan").prop("checked", true);
					} else {
						$("#kelainan_gigi_geligi1_ada_kelainan").prop("checked", false);
					}

				}

			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Error get data from ajax');
			}
		});
	}

	function tampil_pemeriksaan_khusus(tgl, kode_pasien) {
		$.ajax({
			url: base_url + "Doctor/get_pemeriksaan_khusus/" + tgl + '/' + kode_pasien,
			type: "GET",
			dataType: "JSON",
			success: function(result) {
				if (result == null) {
					$('#keterangan_khusus').val('');
				} else {
					$('#keterangan_khusus').val(result.keterangan);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Error get data from ajax');
			}
		});
	}

	function tampil_pemeriksaan_penunjang(tgl, kode_pasien) {
		$.ajax({
			url: base_url + "Doctor/get_pemeriksaan_penunjang/" + tgl + '/' + kode_pasien,
			type: "GET",
			dataType: "JSON",
			success: function(result) {
				if (result == null) {
					$("#panoramik").prop("checked", false);
					$("#sefalometri").prop("checked", false);
					$("#transcranial").prop("checked", false);
					$("#dental_regio").prop("checked", false);
					$('#gigi').val('');
					$('#keterangan_radiologi').val('');
				} else {
					if (result.radiologi == 'Panoramik' || result.radiologi == 'Panoramik,Sefalometri' || result.radiologi == 'Panoramik,Transcranial' || result.radiologi == 'Panoramik,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Transcranial' || result.radiologi == 'Panoramik,Sefalometri,Dental Regio' || result.radiologi == 'Panoramik,Transcranial,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio') {
						$("#panoramik").prop("checked", true);
					} else {
						$("#panoramik").prop("checked", false);
					}

					if (result.radiologi == 'Sefalometri' || result.radiologi == 'Sefalometri,Transcranial' || result.radiologi == 'Sefalometri,Dental Regio' || result.radiologi == 'Sefalometri,Transcranial,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri' || result.radiologi == 'Panoramik,Sefalometri,Transcranial' || result.radiologi == 'Panoramik,Sefalometri,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio') {
						$("#sefalometri").prop("checked", true);
					} else {
						$("#sefalometri").prop("checked", false);
					}

					if (result.radiologi == 'Transcranial' || result.radiologi == 'Transcranial,Dental Regio' || result.radiologi == 'Panoramik,Transcranial' || result.radiologi == 'Panoramik,Sefalometri,Transcranial' || result.radiologi == 'Panoramik,Transcranial,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' || result.radiologi == 'Sefalometri,Transcranial' || result.radiologi == 'Sefalometri,Transcranial,Dental Regio') {
						$("#transcranial").prop("checked", true);
					} else {
						$("#transcranial").prop("checked", false);
					}

					if (result.radiologi == 'Dental Regio' || result.radiologi == 'Panoramik,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Dental Regio' || result.radiologi == 'Panoramik,Transcranial,Dental Regio' || result.radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' || result.radiologi == 'Sefalometri,Dental Regio' || result.radiologi == 'Sefalometri,Transcranial,Dental Regio' || result.radiologi == 'Transcranial,Dental Regio') {
						$("#dental_regio").prop("checked", true);
					} else {
						$("#dental_regio").prop("checked", false);
					}

					$('#gigi').val(result.gigi);
					$('#keterangan_radiologi').val(result.keterangan_radiologi);
					$('#id_pemeriksaan_penunjang').val(result.id_pemeriksaan_penunjang);
					$('#foto_radiologi_download').val(result.foto_radiologi);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Error get data from ajax');
			}
		});
	}

	function tampil_pemeriksaan_penunjang_lab(tgl, kode_pasien) {
		$.ajax({
			url: base_url + "Doctor/get_pemeriksaan_penunjang_lab/" + tgl + '/' + kode_pasien,
			type: "GET",
			dataType: "JSON",
			success: function(result) {
				if (result == null) {
					$("#laboratorium1_darah_rutin").prop("checked", false);
					$("#laboratorium1_lainnya").prop("checked", false);
					$('#laboratorium2').val('');
					$('#id_pemeriksaan_penunjang2').val('');
					$('#foto_laboratorium_download').val('');
					$('#keterangan_laboratorium').val('');
				} else {
					if (result.laboratorium == 'Darah Rutin') {
						$("#laboratorium1_darah_rutin").prop("checked", true);
					} else {
						$("#laboratorium1_darah_rutin").prop("checked", false);
					}

					if (result.laboratorium != 'Darah Rutin') {
						$('#laboratorium2').val(result.laboratorium);
						$("#laboratorium1_lainnya").prop("checked", true);
					} else {
						$("#laboratorium1_lainnya").prop("checked", false);
					}

					$('#keterangan_laboratorium').val(result.keterangan_laboratorium);
					$('#id_pemeriksaan_penunjang2').val(result.id_pemeriksaan_penunjang);
					$('#foto_laboratorium_download').val(result.foto_laboratorium);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Error get data from ajax');
			}
		});
	}

	$(document).ready(function() {
		//Date range picker
		$('#tgl_awal').datepicker({
			format: "yyyy-mm-dd",
			autoclose: true
		});

		$('#filter_date').datepicker({
			format: "yyyy-mm-dd",
			autoclose: true
		});
		$('#filter_date2').datepicker({
			format: "yyyy-mm-dd",
			autoclose: true
		});
		$('#filter_date3').datepicker({
			format: "yyyy-mm-dd",
			autoclose: true
		});
		$('#filter_date4').datepicker({
			format: "yyyy-mm-dd",
			autoclose: true
		});
	});

	function pil_layanan() {
		var layanan = $('#layanan').val();
		var jumlah = $('#jumlah').val();
		var diskon = $('#diskon').val();
		$.ajax({
			url: "<?= base_url('doctor/show_price') ?>",
			data: {
				layanan: layanan
			},
			success: function(data) {
				// console.log(data);
				$('#txtlayanan').html(data);
			}
		})
		$.ajax({
			url: "<?= base_url('doctor/show_subtotal') ?>",
			data: {
				layanan: layanan,
				jumlah: jumlah
			},
			success: function(data) {
				// console.log(data);
				$('#txttotal').html(data);
				$('#txttot').val(data);
				$('#txtgrand').val(data);
			}
		})
		$.ajax({
			url: "<?= base_url('doctor/grandtotal') ?>",
			data: {
				layanan: layanan,
				jumlah: jumlah,
				diskon: diskon
			},
			success: function(data) {
				// console.log(data);
				$('#txtgrand').val(data);
			}
		});
	}

	$(document).ready(function() {
		$('#jumlah').change(function() {
			// let a = $(this).val();
			// console.log(a);
			subtotal();
		});
	});

	function subtotal() {
		var layanan = $('#layanan').val();
		var jumlah = $('#jumlah').val();
		var diskon = $('#diskon').val();
		$.ajax({
			url: "<?= base_url('doctor/show_subtotal') ?>",
			data: {
				layanan: layanan,
				jumlah: jumlah
			},
			success: function(data) {
				// console.log(data);
				$('#txttotal').html(data);
				$('#txttot').val(data);
				$('#txtgrand').val(data);
			}
		});
	}

	$(document).ready(function() {
		$('#diskon').change(function() {
			// let a = $(this).val();
			// console.log(a);
			grandtotal();
		});
	});

	function grandtotal() {
		var layanan = $('#layanan').val();
		var jumlah = $('#jumlah').val();
		var diskon = $('#diskon').val();
		$.ajax({
			url: "<?= base_url('doctor/grandtotal') ?>",
			data: {
				layanan: layanan,
				jumlah: jumlah,
				diskon: diskon
			},
			success: function(data) {
				// console.log(data);
				$('#txtgrand').val(data);
			}
		});
	}
</script>