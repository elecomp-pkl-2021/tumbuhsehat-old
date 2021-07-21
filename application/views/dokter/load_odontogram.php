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
																	<button data-toggle="tab" href="#pilih_jadwal" type="button" class="btn salmon stil" style="float: left;margin-top: 42%;">Kembali</button>
																</div>	

															</div>
															<div class='col-sm-5'>
																<div id="controls3" class="panel panel-default">
																	<div class="panel-body" style='padding: 4px;'>
																		<div class="btn-group list-group" data-toggle="buttons" style="margin-bottom: -9px;">
																			<!-- <p style="margin-left: 17px;">
																				<div id="sambung" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																						<input type="radio" name="options" id="option12" autocomplete="off"> <p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg')?>" style="width: 100px;position: inherit;right: -19px;">
																				</div>
																			</p> -->
																			<table class="table table-bordered" style='margin-bottom: 13px;'>
																				<tr>
																					<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Keadaan Gigi</th>
																					<th colspan='2' style='font-size: 9px;color: #fff;background-color: #000;'>Restorasi dan Protesa</th>
																				</tr>	
																				<tr>
																					<td style='font-size: 9px;'><div id="non" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option14" style="position: fixed;opacity: 0;pointer-events: none;">non</div></td>
																					<td style='font-size: 9px;'><div id="att" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option15" style="position: fixed;opacity: 0;pointer-events: none;">att</div></td>
																					<td style='font-size: 9px;'><div id="gif" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option16" style="position: fixed;opacity: 0;pointer-events: none;">gif</div></td>
																					<td style='font-size: 9px;'><div id="pon" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option17" style="position: fixed;opacity: 0;pointer-events: none;">pon</div></td>
																				</tr>
																				<tr>
																					<td style='font-size: 9px;'><div id="une" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option18" style="position: fixed;opacity: 0;pointer-events: none;">une</div></td>
																					<td style='font-size: 9px;'><div id="abr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option19" style="position: fixed;opacity: 0;pointer-events: none;">abr</div></td>
																					<td style='font-size: 9px;'><div id="inl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option20" style="position: fixed;opacity: 0;pointer-events: none;">inl</div></td>
																					<td style='font-size: 9px;'><div id="abu" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option21" style="position: fixed;opacity: 0;pointer-events: none;">abu</div></td>
																				</tr>
																				<tr>
																					<td style='font-size: 9px;'><div id="pre" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option22" style="position: fixed;opacity: 0;pointer-events: none;">pre</div></td>
																					<td style='font-size: 9px;'><div id="cfr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option23" style="position: fixed;opacity: 0;pointer-events: none;">cfr</div></td>
																					<td style='font-size: 9px;'><div id="onl" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option24" style="position: fixed;opacity: 0;pointer-events: none;">onl</div></td>
																					<td style='font-size: 9px;'><div id="prd" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option25" style="position: fixed;opacity: 0;pointer-events: none;">prd</div></td>
																				</tr>
																				<tr>
																					<td style='font-size: 9px;'><div id="imv" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option26" style="position: fixed;opacity: 0;pointer-events: none;">imv</div></td>
																					<td style='font-size: 9px;'><div id="rrx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option27" style="position: fixed;opacity: 0;pointer-events: none;">rrx</div></td>
																					<td style='font-size: 9px;'><div id="mpc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option28" style="position: fixed;opacity: 0;pointer-events: none;">mpc</div></td>
																					<td style='font-size: 9px;'><div id="fld" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option29" style="position: fixed;opacity: 0;pointer-events: none;">fld</div></td>
																				</tr>
																				<tr>
																					<td style='font-size: 9px;'><div id="ano" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0;"> <input type="radio" name="options" id="option30" style="position: fixed;opacity: 0;pointer-events: none;">ano</div></td>
																					<td style='font-size: 9px;'><div id="miss" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option31" style="position: fixed;opacity: 0;pointer-events: none;">mis</div></td>
																					<td style='font-size: 9px;'><div id="gmc" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option32" style="position: fixed;opacity: 0;pointer-events: none;">gmc</div></td>
																					<td style='font-size: 9px;'><div id="acr" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option33" style="position: fixed;opacity: 0;pointer-events: none;">acr</div></td>
																				</tr>
																				<tr>
																					<td style='font-size: 9px;'><div id="dia" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option34" style="position: fixed;opacity: 0;pointer-events: none;">dia</div></td>
																					<td></td>
																					<td style='font-size: 9px;'><div id="ipx" class="btn list-group-item" style="width: 100%;color: black;background-color: white;border-color: white;padding: 0px 0px;"> <input type="radio" name="options" id="option35" style="position: fixed;opacity: 0;pointer-events: none;">ipx</div></td>
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
																					<input type="radio" name="options" id="option12" autocomplete="off"> <p style="margin-left: 14px;"><b>Full Metal Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge1.jpg')?>" style="width: 100px;position: inherit;right: -19px;">
																			</div>
																		</p>
																		<p style="margin-left: 17px;">
																			<div id="porcelain" class="btn list-group-item" style="width: 54%;color: black;background-color: white;border-color: white;padding: 5px 0;">
																					<input type="radio" name="options" id="option13" autocomplete="off"> <p style="margin-left: 14px;"><b>Porcelain Bridge</b></p><img src="<?php echo base_url('assets/images/icon/bridge2.jpg')?>" style="width: 121px;position: inherit;right: -7px;">
																			</div>
																		</p>

																	</div>	
																	</div>
																	<button data-toggle="tab" href="#keluhan" type="button" class="btn salmon stil" style="margin-top: 13%;">Selanjutnya</button>
																</div>		
															</div>
														</div>
</div>

<script>var base_url = '<?php echo base_url() ?>';</script>
<script>var odontogramData = '<?php echo $odontogram; ?>';</script>

<script src="<?php echo base_url();?>assets/js/apps/rawat-edit.js"></script>

<script type="text/javascript">

    $(document).ready(function() {
        app_rawat_edit.init();

    });

</script>