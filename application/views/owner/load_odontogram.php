<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<?php
	$odontogram = $rawat['odontogram'];
	// echo "<pre>";
	// print($odontogram);
	// echo "</pre>";
?>
<div id="svgselect" style="width: 610px; height: 230px; background-color: #ffffff;margin-left: 15px;margin-bottom: 385px;"> <!-- background-color:red -->
<svg version="1.1" height="140%" width="100%" style="overflow-x: scroll;">
        <g transform="scale(1.5)" id="odontograma_utama">

        </g>
</svg>
<br /><br />
														<div class='col-sm-12'>
															<div class='col-sm-3'>
															<!-- <button id="btn_clone">Click Me!</button> -->
																<div id="controls" class="panel panel-default">
																	<div class="panel-body">
																	
																	<svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;"  id="parentDiv">
																	
																	<g transform="scale(4.60),translate(0,0)"  id="b_clone">
																	aaa
																	</g>
																	
																	</svg>	
																	
																	<!-- <svg version="1.1" height="100%" width="100%" style="overflow-x: scroll;"  ><ul id="b_clone"><li></li></ul></svg> -->
																	</div>
																	
																</div>	

															</div>
															<div class='col-sm-5'>
																
															</div>
															<div class='col-sm-4'>
																
															</div>
														</div>
</div>

<script>var base_url = '<?php echo base_url() ?>';</script>
<script>var odontogramData = '<?php echo $odontogram; ?>';</script>

<script src="<?php echo base_url();?>assets/js/apps/rawat-edit-rekam.js"></script>

<script type="text/javascript">

    $(document).ready(function() {
        app_rawat_edit.init();

    });

</script>