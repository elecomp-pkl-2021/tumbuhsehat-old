  <?php foreach ($dokter as $result3) : ?>
                        <li class="col-sm-6" style="list-style-type: none;margin-bottom: -30px;">
                          <div class="col-lg-8">
                            <b><?php echo $result3->nama_dokter  ?><br></b>
                          <div style="display: -webkit-box;"> <p><?php echo $result3->spesialis ?></p> <p style="position: absolute;right: 2px;"><i class="fa fa-suitcase" aria-hidden="true" ></i>&nbsp;<?php echo $result3->pengalaman ?>&nbsp;Tahun</p> </div><br>
                          </div>
                          <button class="btn red col-lg-4" style="float: right; width: 100px;background-color: #f40049;color:#fff;" type="button" onclick="pilih_dokter('<?php echo $result3->id_dokter ?>')">Pilih</button>
                          <input type="hidden" name="id_dokter" value="<?php echo $result3->id_dokter ?>">
                          <div class="col-sm-12">
                            <hr>
                          </div>
                        </li>
                        <?php endforeach; ?>