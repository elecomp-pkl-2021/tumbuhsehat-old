<?php

if (!defined('BASEPATH'))
  exit('No direct script access allowed');

class Doctor extends CI_Controller
{

  function __construct()
  {
    parent::__construct();
    $this->load->model('Data_pasien_model');
    $this->load->model('Home_model');
    $this->load->model('Diskon_model');
    $this->load->model('Layanan_model');
    $this->load->model('Metode_model');
    $this->load->model('Informasi_pasien_model');
    $this->load->model('Pemeriksaan_model');
    $this->load->model('Model_booking');
    $this->load->library('form_validation');
    $this->load->library('pagination');
    $this->load->helper('download');
  }

  public function index()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $medis = $this->Home_model->get_medis($id_dokter);
      //print_r($this->db->last_query);
      $data['medis'] = $medis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['_jadwal_pemeriksaan'] = 1;
      $data['content'] = 'dokter/home';
      $this->load->view('template/template', $data);
    endforeach;
  }

  public function get_data_pemeriksaan()
  {
    $id_user = $this->session->userdata('id_user');
    $dokter = $this->Home_model->get_dokter($id_user);
    echo json_encode($this->Home_model->get_data_pemeriksaan($dokter->id_dokter)->result());
  }

  public function get_data_pemeriksaan2($jam_rencana_mulai2 = "", $nama2 = "", $tgl_lahir2 = "", $rekam_medis2 = "", $status2 = "", $kode_booking2 = "")
  {

    $jam_rencana_mulai3 = $this->uri->segment(3);
    if ($jam_rencana_mulai3 == '0') {
      $jam_rencana_mulai = "0";
    } else {
      $jam_rencana_mulai = $this->uri->segment(3);
    }

    $nama3 =  $this->uri->segment(4);
    if ($nama3 == '0') {
      $nama = "0";
    } else {
      $nama =  $this->uri->segment(4);
    }

    $tgl_lahir3 = $this->uri->segment(5);
    if ($tgl_lahir3 == '0') {
      $tgl_lahir = "0";
    } else {
      $tgl_lahir = $this->uri->segment(5);
    }

    $rekam_medis3 = $this->uri->segment(6);
    if ($rekam_medis3 == '0') {
      $rekam_medis = "0";
    } else {
      $rekam_medis = $this->uri->segment(6);
    }

    $status3 = $this->uri->segment(7);
    if ($status3 == '0') {
      $status = "0";
    } else {
      $status = $this->uri->segment(7);
    }

    $kode_booking3 = $this->uri->segment(8);
    // echo 'kode_booking'.$kode_booking3;
    if ($kode_booking3 == '0') {
      $kode_booking = "0";
      //   echo "iku";
    } else {
      $kode_booking = $this->uri->segment(8);
      // echo "iki";
    }

    $id_user = $this->session->userdata('id_user');
    $dokter = $this->Home_model->get_dokter($id_user);
    echo json_encode($this->Home_model->get_data_pemeriksaan2($jam_rencana_mulai, $nama, $tgl_lahir, $rekam_medis, $status, $kode_booking, $dokter->id_dokter)->result());
    // $this->Klinik_model->get_register_janji($nama, $tgl_lahir, $rekam_medis, $id_dokter, $tanggal_rencana, $jam_rencana_mulai,$kode_booking)->result();
    // print_r($this->db->last_query());
  }

  function get_periksa($id_pasien, $id_rekam_medis)
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;

      date_default_timezone_set("Asia/Jakarta");
      $jam = date("H:i:s");
      $tgl = date("Y-m-d");

      $status_r = '1';
      $jam_mulai = array(
        'jam_mulai_periksa' => $jam,
        'status' => $status_r,
        'tanggal_periksa' => $tgl
      );
      $this->Home_model->periksa_edit_status($id_pasien, $id_rekam_medis, $jam_mulai);

      redirect('doctor/periksa/' . $id_pasien . '/' . $id_rekam_medis, 'refresh');
    endforeach;
  }

  function randomString($length = 10)
  {
    $str = "";
    $characters = array_merge(range('0', '9'));
    $max = count($characters) - 1;
    for ($i = 0; $i < $length; $i++) {
      $rand = mt_rand(0, $max);
      $str  .= $characters[$rand];
    }
    return $str;
  }

  function periksa($id_pasien, $id_rekam_medis)
  {
    $idk_psn = $this->session->userdata('id_kpesan');
    if (!empty($idk_psn)) {
      $id_kpesan = $this->session->userdata('id_kpesan');
    } else {
      $id_kpesan = $this->randomString();
      $data['id_kpesan'] = $id_kpesan;
      // $data_kpesan['tgl_kpesan'] = date('Y-m-d');
      // $this->Model->add('tk_pesan',$data_kpesan);
      // $this->session->set_userdata('id_kpesan',$id_kpesan);
      // $this->session->set_userdata('tgl_kpesan',date('Y-m-d'));
    }

    $tgl_awal = date('Y-m-d');

    $rawat = $this->Home_model->get_one_rawat_by_id_medis($id_pasien, $tgl_awal, $id_rekam_medis);
    // print_r($this->db->last_query());
    $data_rawat = json_decode(json_encode(@$rawat[0]), true);
    if ($data_rawat && is_array($data_rawat)) {
      $rawat = array_merge(@$data_rawat, array("detail_rawat" => array()));
    }


    $data['rawat'] = $rawat;

    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;

      $layanan = $this->Layanan_model->layanan_active();
      $data['layanan'] = $layanan;

      $diskon = $this->Diskon_model->diskon_active();
      $data['diskon'] = $diskon;

      $getData = $this->Pemeriksaan_model->get_pemeriksaan_umum_all($id_pasien);
      $getData = $this->Pemeriksaan_model->get_pemeriksaan_khusus_all($id_pasien);
      $getData = $this->Pemeriksaan_model->get_pemeriksaan_penunjang_all($id_pasien);

      if ($getData->num_rows() == 0) {
        $pasien1 = $this->Data_pasien_model->get_medis_pasien($id_rekam_medis, $id_pasien);
        $data['pasien'] = $pasien1;
        $data['_jadwal_pemeriksaan'] = 1;
        $data['id_pasien'] = $id_pasien;
        $data['content'] = 'dokter/pemeriksaan';
        $this->load->view('template/template', $data);
      } else {
        $pemeriksaan_klinis_umum = $this->Pemeriksaan_model->get_pemeriksaan_umum($id_pasien);
        $data['pemeriksaan_umum'] = $pemeriksaan_klinis_umum;

        $pemeriksaan_klinis_khusus = $this->Pemeriksaan_model->get_pemeriksaan_khusus($id_pasien);
        $data['pemeriksaan_khusus'] = $pemeriksaan_klinis_khusus;

        $pemeriksaan_penunjang = $this->Pemeriksaan_model->get_pemeriksaan_penunjang($id_pasien);
        $data['pemeriksaan_penunjang'] = $pemeriksaan_penunjang;

        // $pasien = $this->Pemeriksaan_model->get_rekam_pasien($id_pasien);
        // $data['rekam_pasien'] = $pasien;

        $pasien1 = $this->Data_pasien_model->get_medis_pasien($id_rekam_medis, $id_pasien);
        $data['pasien'] = $pasien1;
        $data['id_pasien'] = $id_pasien;
        $data['_jadwal_pemeriksaan'] = 1;
        $data['content'] = 'dokter/pemeriksaan_id';
        $this->load->view('template/template', $data);
      }

    endforeach;
  }

  public function getTemp($idSvg, $idPemeriksaan)
  {
    $data = $this->Pemeriksaan_model->get_temp($idSvg, $idPemeriksaan);
    echo json_encode($data);
  }

  public function get_pemeriksaan_klinis($tgl, $id_pasien)
  {
    if ($tgl == 0) {
      $tgl = "";
    }

    // if ($id_pasien==0) {
    //     $id_pasien="";
    // }
    $data = $this->Pemeriksaan_model->get_pemeriksaan_klinis($tgl, $id_pasien);
    echo json_encode($data);
  }

  public function get_pemeriksaan_khusus($tgl, $id_pasien)
  {
    if ($tgl == 0) {
      $tgl = "";
    }

    $data = $this->Pemeriksaan_model->get_pemeriksaan_khusus_id($tgl, $id_pasien);
    echo json_encode($data);
  }

  public function get_pemeriksaan_penunjang($tgl, $id_pasien)
  {
    if ($tgl == 0) {
      $tgl = "";
    }

    $data = $this->Pemeriksaan_model->get_pemeriksaan_penunjang_id($tgl, $id_pasien);
    echo json_encode($data);
  }

  public function get_pemeriksaan_penunjang_lab($tgl, $id_pasien)
  {
    if ($tgl == 0) {
      $tgl = "";
    }

    $data = $this->Pemeriksaan_model->get_pemeriksaan_penunjang_lab_id($tgl, $id_pasien);
    echo json_encode($data);
  }

  public function ajax_check_id()
  {
    //$date = date('Y-m-d');
    $data = $this->Home_model->get_check_id();
    echo json_encode($data);
  }

  public function upload_radiologi()
  {
    $config['upload_path']          = './assets/foto';
    $config['allowed_types']        = 'jpg|png|jpeg|gif';
    $config['max_size']             = 15000000;
    $config['max_width']            = 1024000;
    $config['max_height']           = 7680000;

    $new_name = 'fotoradiologi_' . time();
    $config['file_name'] = $new_name;
    $this->load->library('upload', $config);
    $this->upload->initialize($config);
    if ($this->upload->do_upload('foto_radiologi')) {
      // $id_img1 = $this->input->post('id_album');
      // $oldImage1 = $this->Mdl_gallery->get_by_id($id_img1);
      // if ($oldImage1->album_gambar != "") {
      //   unlink('assets/images/'.$oldImage1->album_gambar);
      // }
      $get_name = $this->upload->data();
      $nama_foto = $get_name['file_name'];
      $gambar1 = $nama_foto;
      $data['foto_radiologi'] = $gambar1;
    }
    //  $data['id_admin'] = $this->session->userdata('id_admin');

    $where = array('id_pemeriksaan_penunjang' => $this->input->post('id_pemeriksaan_penunjang'));
    $this->Pemeriksaan_model->update_data($where, $data, 'pemeriksaan_penunjang');

    // echo 'id'.$this->input->post('id_pemeriksaan_penunjang');

    echo json_encode(array('status' => TRUE));
  }

  public function upload_laboratorium()
  {
    $config['upload_path']          = './assets/foto';
    $config['allowed_types']        = 'jpg|png|jpeg|gif';
    $config['max_size']             = 15000000;
    $config['max_width']            = 1024000;
    $config['max_height']           = 7680000;

    $new_name = 'fotolaboratorium_' . time();
    $config['file_name'] = $new_name;
    $this->load->library('upload', $config);
    $this->upload->initialize($config);
    if ($this->upload->do_upload('foto_laboratorium')) {
      // $id_img1 = $this->input->post('id_album');
      // $oldImage1 = $this->Mdl_gallery->get_by_id($id_img1);
      // if ($oldImage1->album_gambar != "") {
      //   unlink('assets/images/'.$oldImage1->album_gambar);
      // }
      $get_name = $this->upload->data();
      $nama_foto = $get_name['file_name'];
      $gambar1 = $nama_foto;
      $data['foto_laboratorium'] = $gambar1;
    }
    //  $data['id_admin'] = $this->session->userdata('id_admin');

    $where = array('id_pemeriksaan_penunjang' => $this->input->post('id_pemeriksaan_penunjang2'));
    $this->Pemeriksaan_model->update_data($where, $data, 'pemeriksaan_penunjang');

    // echo 'id'.$this->input->post('id_pemeriksaan_penunjang');

    echo json_encode(array('status' => TRUE));
  }

  public function download_radiologi($foto)
  {
    // $file_path = 'assets/foto/' . $foto;
    // $this->_push_file($file_path, $foto);
    $file = realpath("assets/foto") . "/" . $foto;
    // check file exists    
    if (file_exists($file)) {
      // get file content
      $data = file_get_contents($file);
      //force download
      force_download($fileName, $data);
    }
  }

  public function download_lab($foto)
  {
    // $file_path = 'assets/foto/' . $foto;
    // $this->_push_file($file_path, $foto);
    $file = realpath("assets/foto") . "/" . $foto;
    // check file exists    
    if (file_exists($file)) {
      // get file content
      $data = file_get_contents($file);
      //force download
      force_download($fileName, $data);
    }
  }

  public function id_oto($kode, $tabel, $id)
  {
    $fix = 0;
    $kode = $kode;
    $fix = $this->Data_pasien_model->get_id($tabel, $id)->row_array();
    if (empty($fix)) {
      $fix = 0;
    }
    if (substr($fix[$id], 4, 6) == date('ymd')) {
      $angka = substr($fix[$id], 11) + 1;
      $angka_p = str_pad($angka, 3, "0", STR_PAD_LEFT);
      $tgl_angk = substr($fix[$id], 4, 7) . $angka_p;
    } else {
      $tgl_angk = date('ymd') . '_001';
    }
    return $kode_jadi = $kode . '_' . $tgl_angk;
  }

  public function form_validasi_pemeriksaan_dokter()
  {
    $this->form_validation->set_rules('nama_depan', 'Nama Depan', 'required');
    $this->form_validation->set_rules('nama_belakang', 'Nama Belakang', 'required');
    $this->form_validation->set_rules('tempat_lahir', 'Tempat Lahir', 'required');
    $this->form_validation->set_rules('tanggal_lahir', 'Tanggal Lahir', 'required');
    $this->form_validation->set_rules('jenis_kelamin', 'Jenis Kelamin', 'required');
    $this->form_validation->set_rules('status_nikah', 'Status Nikah', 'required');
    $this->form_validation->set_rules('pekerjaan', 'Pekerjaan', 'required');
    $this->form_validation->set_rules('pendidikan', 'Pendidikan', 'required');
    $this->form_validation->set_rules('jenis_id', 'Jenis ID', 'required');
    $this->form_validation->set_rules('no_id', 'No ID', 'required');
    $this->form_validation->set_rules('alamat', 'Alamat', 'required');
    $this->form_validation->set_rules('kota_kab', 'Kabupaten', 'required');
    $this->form_validation->set_rules('provinsi', 'Provinsi', 'required');
    $this->form_validation->set_rules('kode_pos', 'Kode Pos', 'required');
    $this->form_validation->set_rules('email', 'Email', 'required');
    $this->form_validation->set_rules('no_hp', 'No Hp', 'required');
    $this->form_validation->set_rules('gol_darah', 'Golongan Darah', 'required');
    $this->form_validation->set_rules('riwayat_pesakit', 'Riwayat Penyakit', 'required');

    $this->form_validation->set_message('required', '%s kosong, silahkan diisi!');
  }

  public function create_odontogram_periksa()
  {
    $data_pemeriksaan_odontogram = array(
      'id_pasien' => $this->input->post('id_pasien'),
      'id_booking' => $this->input->post('id_booking'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'odontogram' => $this->input->post('odontogram'),
      'tgl_pemeriksaan' => date('Y-m-d')
    );

    $this->Pemeriksaan_model->insert_pemeriksaan_odontogram($data_pemeriksaan_odontogram);
    //print_r($this->db->last_query());

    echo json_encode(array('status' => TRUE));
  }

  public function create_action_periksa()
  {

    $id_pemeriksaan_penunjang = $this->input->post('id_pemeriksaan_penunjang');
    $id_pasien = $this->input->post('id_pasien');
    $id_booking = $this->input->post('id_booking');
    $id_rekam_medis = $this->input->post('id_rekam_medis');
    $gigi = $this->input->post('gigi');
    $keterangan_radiologi = $this->input->post('keterangan_radiologi');
    $laboratorium = $this->input->post('laboratorium');
    $keterangan_laboratorium = $this->input->post('keterangan_laboratorium');
    $foto_radiologi = $this->input->post('foto_radiologi');
    $foto_laboratorium = $this->input->post('foto_laboratorium');
    $odontogram = $this->input->post('odontogram');

    $config['upload_path']          = './assets/foto';
    $config['allowed_types']        = 'jpg|png|jpeg|gif';
    $config['max_size']             = 15000000;
    $config['max_width']            = 1024000;
    $config['max_height']           = 7680000;
    $this->load->library('upload', $config);
    $this->upload->do_upload('foto_radiologi');
    $file1 = $this->upload->data();
    $foto_radiologi = $file1['file_name'];
    $this->upload->do_upload('foto_laboratorium');
    $file2 = $this->upload->data();
    $foto_laboratorium = $file2['file_name'];

    $data_pemeriksaan_penunjang = array(
      'id_pemeriksaan_penunjang' => $id_pemeriksaan_penunjang,
      'id_pasien' => $id_pasien,
      'id_booking' => $id_booking,
      'id_rekam_medis' => $id_rekam_medis,
      'gigi' => $gigi,
      'keterangan_radiologi' => $keterangan_radiologi,
      'keterangan_laboratorium' => $keterangan_laboratorium,
      'foto_radiologi' => $foto_radiologi,
      'foto_laboratorium' => $foto_laboratorium
    );

    $panoramik = $this->input->post('panoramik');
    $sefalometri = $this->input->post('sefalometri');
    $transcranial = $this->input->post('transcranial');
    $dental_regio = $this->input->post('dental_regio');

    $laboratorium1 = $this->input->post('laboratorium1');
    $laboratorium2 = $this->input->post('laboratorium2');

    if ($laboratorium1 != NULL) {
      $data_pemeriksaan_penunjang['laboratorium'] = $laboratorium1;
    } elseif ($laboratorium2 != NULL) {
      $data_pemeriksaan_penunjang['laboratorium'] = $laboratorium2;
    }

    if ($panoramik != NULL) {
      $data_pemeriksaan_penunjang['radiologi'] = $panoramik;
    }
    if ($sefalometri != NULL) {
      $data_pemeriksaan_penunjang['radiologi'] = $sefalometri;
    }
    if ($transcranial != NULL) {
      $data_pemeriksaan_penunjang['radiologi'] = $transcranial;
    }
    if ($dental_regio != NULL) {
      $data_pemeriksaan_penunjang['radiologi'] = $dental_regio;
    }
    /*========================== 2 */
    if ($panoramik != NULL) {
      if ($sefalometri != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $sefalometri;
      }
    }
    if ($panoramik != NULL) {
      if ($transcranial != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $transcranial;
      }
    }
    if ($panoramik != NULL) {
      if ($dental_regio != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $dental_regio;
      }
    }
    if ($sefalometri != NULL) {
      if ($transcranial != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $sefalometri . "," . $transcranial;
      }
    }
    if ($sefalometri != NULL) {
      if ($dental_regio != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $sefalometri . "," . $dental_regio;
      }
    }
    if ($transcranial != NULL) {
      if ($dental_regio != NULL) {
        $data_pemeriksaan_penunjang['radiologi'] = $transcranial . "," . $dental_regio;
      }
    }
    /*=============================== 3 */
    if ($panoramik != NULL) {
      if ($sefalometri != NULL) {
        if ($transcranial != NULL) {
          $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $sefalometri . "," . $transcranial;
        }
      }
    }
    if ($panoramik != NULL) {
      if ($sefalometri != NULL) {
        if ($dental_regio != NULL) {
          $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $sefalometri . "," . $dental_regio;
        }
      }
    }
    if ($panoramik != NULL) {
      if ($transcranial != NULL) {
        if ($dental_regio != NULL) {
          $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $transcranial . "," . $dental_regio;
        }
      }
    }
    if ($sefalometri != NULL) {
      if ($transcranial != NULL) {
        if ($dental_regio != NULL) {
          $data_pemeriksaan_penunjang['radiologi'] = $sefalometri . "," . $transcranial . "," . $dental_regio;
        }
      }
    }
    /*============================= 4 panom*/
    if ($panoramik != NULL) {
      if ($sefalometri != NULL) {
        if ($transcranial != NULL) {
          if ($dental_regio != NULL) {
            $data_pemeriksaan_penunjang['radiologi'] = $panoramik . "," . $sefalometri . "," . $transcranial . "," . $dental_regio;
          }
        }
      }
    }

    date_default_timezone_set("Asia/Jakarta");
    $jam = date("H:i:s");
    $status = '2';
    $data_rekam = array(
      'jam_selesai_periksa' => $jam,
      'status' => $status,
      'elemen_gigi' => $this->input->post('elemen_gigi'),
      'keluhan_utama' => $this->input->post('keluhan_utama'),
      'diagnosis' => $this->input->post('diagnosis'),
      'keadaan_umum' => $this->input->post('keadaan_umum'),
      'subtotal' => $this->input->post('subtotal'),
      'grandtotal' => $this->input->post('grandtotal')
    );

    $data_booking = array(
      'status' => $status,
    );

    $data_pasien = array(
      'nama_depan' => $this->input->post('nama_depan'),
      'nama_belakang' => $this->input->post('nama_belakang'),
      'tempat_lahir' => $this->input->post('tempat_lahir'),
      'tanggal_lahir' => $this->input->post('tanggal_lahir'),
      'jenis_kelamin' => $this->input->post('jenis_kelamin'),
      'status_nikah' => $this->input->post('status_nikah'),
      'pekerjaan' => $this->input->post('pekerjaan'),
      'pendidikan' => $this->input->post('pendidikan'),
      'jenis_id' => $this->input->post('jenis_id'),
      'no_id' => $this->input->post('no_id'),
      'alamat' => $this->input->post('alamat'),
      'kota_kab' => $this->input->post('kota_kab'),
      'provinsi' => $this->input->post('provinsi'),
      'kode_pos' => $this->input->post('kode_pos'),
      'email' => $this->input->post('email'),
      'no_hp' => $this->input->post('no_hp'),
      'gol_darah' => $this->input->post('gol_darah'),
      'alergi' => $this->input->post('alergi'),
      'riwayat_penyakit' => $this->input->post('riwayat_penyakit'),
    );

    $data_pemeriksaan_umum = array(
      'id_pemeriksaan_umum' => $this->input->post('id_pemeriksaan_umum'),
      'id_pasien' => $this->input->post('id_pasien'),
      'id_booking' => $this->input->post('id_booking'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'wajah' => $this->input->post('wajah'),
      'subkanan_kondisi' => $this->input->post('subkanan_kondisi'),
      'subkiri_kondisi' => $this->input->post('subkiri_kondisi'),
      'lainnya' => $this->input->post('lainnya'),
      'stain' => $this->input->post('stain'),
      'kalkulus' => $this->input->post('kalkulus'),


    );

    $data_pemeriksaan_odontogram = array(
      'id_pasien' => $this->input->post('id_pasien'),
      'id_booking' => $this->input->post('id_booking'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'odontogram' => $this->input->post('odontogram'),
      'tgl_pemeriksaan' => date('Y-m-d')
    );


    $bibir1 = $this->input->post('bibir1');
    $bibir2 = $this->input->post('bibir2');
    $submandibula_kanan1 = $this->input->post('submandibula_kanan1');
    $submandibula_kanan2 = $this->input->post('submandibula_kanan2');
    $submandibula_kiri1 = $this->input->post('submandibula_kiri1');
    $submandibula_kiri2 = $this->input->post('submandibula_kiri2');
    $gingiva1 = $this->input->post('gingiva1');
    $gingiva2 = $this->input->post('gingiva2');
    $debris1 = $this->input->post('debris1');
    $debris2 = $this->input->post('debris2');
    $mukosa1 =  $this->input->post('mukosa1');
    $mukosa2 =  $this->input->post('mukosa2');
    $palatum1 = $this->input->post('palatum1');
    $palatum2 = $this->input->post('palatum2');
    $lidah1 = $this->input->post('lidah1');
    $lidah2 = $this->input->post('lidah2');
    $dasar_mulut1 = $this->input->post('dasar_mulut1');
    $dasar_mulut2 = $this->input->post('dasar_mulut2');

    if ($bibir1 != NULL) {
      $data_pemeriksaan_umum['bibir'] = $bibir1;
    } elseif ($bibir2 != NULL) {
      $data_pemeriksaan_umum['bibir'] = $bibir2;
    }
    if ($submandibula_kanan1 != NULL) {
      $data_pemeriksaan_umum['submandibula_kanan'] = $submandibula_kanan1;
      if ($submandibula_kanan2 != NULL) {
        $data_pemeriksaan_umum['submandibula_kanan'] = $submandibula_kanan1 . "," . $submandibula_kanan2;
      }
    } elseif ($submandibula_kanan2 != NULL) {
      $data_pemeriksaan_umum['submandibula_kanan'] = $submandibula_kanan2;
      if ($submandibula_kanan1 != NULL) {
        $data_pemeriksaan_umum['submandibula_kanan'] = $submandibula_kanan2 . "," . $submandibula_kanan1;
      }
    }
    if ($submandibula_kiri1 != NULL) {
      $data_pemeriksaan_umum['submandibula_kiri'] = $submandibula_kiri1;
      if ($submandibula_kiri2 != NULL) {
        $data_pemeriksaan_umum['submandibula_kiri'] = $submandibula_kiri1 . "," . $submandibula_kiri2;
      }
    } elseif ($submandibula_kiri2 != NULL) {
      $data_pemeriksaan_umum['submandibula_kiri'] = $submandibula_kiri2;
      if ($submandibula_kiri1 != NULL) {
        $data_pemeriksaan_umum['submandibula_kiri'] = $submandibula_kiri2 . "," . $submandibula_kiri1;
      }
    }
    if ($gingiva1 != NULL) {
      $data_pemeriksaan_umum['gingiva'] = $gingiva1;
    } elseif ($gingiva2 != NULL) {
      $data_pemeriksaan_umum['gingiva'] = $gingiva2;
    }
    if ($debris1 != NULL) {
      $data_pemeriksaan_umum['debris'] = $debris1;
    } elseif ($debris2 != NULL) {
      $data_pemeriksaan_umum['debris'] = $debris2;
    }
    if ($mukosa1 != NULL) {
      $data_pemeriksaan_umum['mukosa'] = $mukosa1;
    } elseif ($mukosa2 != NULL) {
      $data_pemeriksaan_umum['mukosa'] = $mukosa2;
    }
    if ($palatum1 != NULL) {
      $data_pemeriksaan_umum['palatum'] = $palatum1;
    } elseif ($palatum2 != NULL) {
      $data_pemeriksaan_umum['palatum'] = $palatum2;
    }
    if ($lidah1 != NULL) {
      $data_pemeriksaan_umum['lidah'] = $lidah1;
    } elseif ($lidah2 != NULL) {
      $data_pemeriksaan_umum['lidah'] = $lidah2;
    }
    if ($dasar_mulut1 != NULL) {
      $data_pemeriksaan_umum['dasar_mulut'] = $dasar_mulut1;
    } elseif ($dasar_mulut2 != NULL) {
      $data_pemeriksaan_umum['dasar_mulut'] = $dasar_mulut2;
    }

    $data_pemeriksaan_umum['date'] = date('Y-m-d');

    $data_pemeriksaan_khusus = array(
      'id_pemeriksaan_khusus' => $this->input->post('id_pemeriksaan_khusus'),
      'id_pasien' => $this->input->post('id_pasien'),
      'id_booking' => $this->input->post('id_booking'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'keterangan' => $this->input->post('keterangan_khusus'),
      'date' => date('Y-m-d')

    );

    $data_pilih_layanan = array(
      'id_pil_layanan' => $this->input->post('id_pil_layanan'),
      'id_pasien' => $this->input->post('id_pasien'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'id_layanan' => $this->input->post('id_layanan'),
      'jumlah' => $this->input->post('jumlah'),
      'detail_layanan' => $this->input->post('detail_layanan'),
      'id_diskon' => $this->input->post('id_diskon'),
    );

    $this->Pemeriksaan_model->update_rekam($this->input->post('id_rekam_medis'), $data_rekam);
    $this->Pemeriksaan_model->update_booking($id_booking, $data_booking);
    $this->Pemeriksaan_model->insert_pemeriksaan_umum($data_pemeriksaan_umum);
    $this->Pemeriksaan_model->insert_pemeriksaan_khusus($data_pemeriksaan_khusus);
    $this->Pemeriksaan_model->insert_pemeriksaan_penunjang($data_pemeriksaan_penunjang);
    $this->Pemeriksaan_model->insert_pilih_layanan($data_pilih_layanan);
    $this->Pemeriksaan_model->update_pasien($this->input->post('id_pasien'), $data_pasien);
    $this->Pemeriksaan_model->update_pemeriksaan_odontogram($data_pemeriksaan_odontogram, $this->input->post('id_booking'));
    //print_r($this->db->last_query());

    echo json_encode(array('status' => TRUE));

    // $this->session->set_flashdata('notif', '<div class="alert alert-success alert-dismissible"> Data Mahasiswa berhasil ditambah.
    //     </div>');

    // //redirect
    // redirect(site_url('doctor'));
  }

  function add_rawat_header()
  {
    error_reporting(0);

    $odontogram  = $this->input->post('odontogram');
    echo 'odontogrom' . $odontogram;
  }

  public function get_hubungan_pasien($id_user)
  {
    $id = $_GET['id'];
    if ($id == 0) {
      $this->db->select('*');
      $this->db->from('pasien');
      $this->db->where('id_user', $id_user);
      $this->db->like('hubungan', 'Anda');
      $data = $this->db->get('')->result();
      foreach ($data as $key) {
        echo $key->nama_depan . " " . $key->nama_belakang;
      }
    }
  }

  public function get_conversion_rate($id_dokter)
  {
    $cr = $_GET['cr'];
    if ($cr == 0) {
      $this->db->select('* ,COUNT(a.id_rekam_medis) as jml_id');
      $this->db->from('rekam_medis a');
      $this->db->join('booking b', 'a.id_booking = b.id_booking');
      $this->db->where('b.konfirmasi', '1');
      $this->db->where('b.status', '3');
      $this->db->where('a.status', '3');
      $this->db->where('b.id_dokter', $id_dokter);
      $data = $this->db->get('')->result();

      $this->db->select('* ,COUNT(a.id_rekam_medis) as jml_all_id');
      $this->db->from('rekam_medis a');
      $this->db->join('booking b', 'a.id_booking = b.id_booking');
      $this->db->where('b.konfirmasi', '1');
      $this->db->where('b.id_dokter', $id_dokter);
      $all = $this->db->get('')->result();

      foreach ($data as $key) {
        foreach ($all as $value) {
          $total = ($key->jml_id * 100) / $value->jml_all_id;
          $hasil = substr($total, 0, 4);
          echo $hasil . "%";
        }
      }
    }
  }

  public function get_e_rekam_medis($id_dokter)
  {
    $cr = $_GET['cr'];
    if ($cr == 0) {
      $this->db->select('* ,COUNT(a.id_rekam_medis) as jml_id');
      $this->db->from('rekam_medis a');
      $this->db->join('booking b', 'a.id_booking = b.id_booking');
      $this->db->where('b.konfirmasi', '1');
      $this->db->where('b.status', '2');
      $this->db->where('a.status', '2');
      $this->db->where('b.id_dokter', $id_dokter);
      $data = $this->db->get('')->result();

      $this->db->select('* ,COUNT(a.id_rekam_medis) as jml_all_id');
      $this->db->from('rekam_medis a');
      $this->db->join('booking b', 'a.id_booking = b.id_booking');
      $this->db->where('b.konfirmasi', '1');
      $this->db->where('b.id_dokter', $id_dokter);
      $all = $this->db->get('')->result();

      foreach ($data as $key) {
        foreach ($all as $value) {
          $total = ($key->jml_id * 100) / $value->jml_all_id;
          $hasil = substr($total, 0, 4);
          echo $hasil . "%";
        }
      }
    }
  }



  public function show_price()
  {
    $id = $_GET['layanan'];
    $this->db->select('*');
    $this->db->from('layanan');
    $this->db->where('id_layanan', $id);
    $data = $this->db->get('')->result();

    foreach ($data as $key) :
      echo $key->harga;
    endforeach;
  }

  public function show_subtotal()
  {
    $id = $_GET['layanan'];
    $id2 = $_GET['jumlah'];
    $this->db->select('*');
    $this->db->from('layanan');
    $this->db->where('id_layanan', $id);
    $data = $this->db->get('')->result();

    foreach ($data as $key) :
      if (!empty($id2)) {
        $total = $key->harga * $id2;
        echo $total;
      } else {
        echo $key->harga;
      }
    endforeach;
  }

  public function grandtotal()
  {
    $id = $_GET['layanan'];
    $id2 = $_GET['jumlah'];
    $id3 = $_GET['diskon'];

    $this->db->select('*');
    $this->db->from('layanan');
    $this->db->where('id_layanan', $id);
    $data = $this->db->get('')->result();

    $this->db->select('*');
    $this->db->from('diskon');
    $this->db->where('id_diskon', $id3);
    $disk = $this->db->get('')->result();

    foreach ($data as $key) :
      foreach ($disk as $value) :
        if (!empty($id3)) {
          if (!empty($id2)) {
            $layanan = $key->harga;
            $diskon = $value->nilai_diskon;
            $jumlah = $id2;
            $subtotal = $layanan * $jumlah;
            $grand = ($layanan * $jumlah) * ($diskon / 100);
            $total = $subtotal - $grand;
            echo $total;
          } else {
            echo $key->harga;
          }
        } elseif ($id3 == 0) {
          if (!empty($id2)) {
            $total = $key->harga * $id2;
            echo $total;
          } else {
            echo $key->harga;
          }
        } else {
          if (!empty($id2)) {
            $total = $key->harga * $id2;
            echo $total;
          } else {
            echo $key->harga;
          }
        }

      endforeach;
    endforeach;
  }

  public function informasi_pasien()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $laporan = $this->Informasi_pasien_model->get_laporan_pemeriksaan($id_dokter);
      $data['laporan'] = $laporan;
      $informasi = $this->Informasi_pasien_model->get_informasi($id_dokter);
      $data['informasi'] = $informasi;
      $data['_informasi_pasien'] = 1;
      $data['content'] = 'dokter/informasi_pasien';
      $this->load->view('template/template', $data);
    endforeach;
  }

  public function get_informasi_pasien()
  {
    $id_user = $this->session->userdata('id_user');
    $dokter = $this->Home_model->get_dokter($id_user);

    echo json_encode($this->Informasi_pasien_model->get_informasi_pasien($dokter->id_dokter)->result());
  }

  public function get_informasi_pasien2($nama2 = "", $tgl_lahir2 = "", $rekam_medis2 = "")
  {

    $nama3 =  $this->uri->segment(3);
    if ($nama3 == '0') {
      $nama = "0";
    } else {
      $nama =  $this->uri->segment(3);
    }

    $tgl_lahir3 = $this->uri->segment(4);
    if ($tgl_lahir3 == '0') {
      $tgl_lahir = "0";
    } else {
      $tgl_lahir = $this->uri->segment(4);
    }

    $rekam_medis3 = $this->uri->segment(5);
    if ($rekam_medis3 == '0') {
      $rekam_medis = "0";
    } else {
      $rekam_medis = $this->uri->segment(5);
    }

    $id_user = $this->session->userdata('id_user');
    $dokter = $this->Home_model->get_dokter($id_user);

    echo json_encode($this->Informasi_pasien_model->get_informasi_pasien2($nama, $tgl_lahir, $rekam_medis, $dokter->id_dokter)->result());
    // $this->Klinik_model->get_register_janji($nama, $tgl_lahir, $rekam_medis, $id_dokter, $tanggal_rencana, $jam_rencana_mulai,$kode_booking)->result();
    // print_r($this->db->last_query());
  }

  public function detail_informasi_pasien($id_pasien, $id_booking, $id_rekam_medis)
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();
    $tgl_awal = date('Y-m-d');

    foreach ($dokter as $key) :
      $rawat = $this->Home_model->get_one_rawat_by_id_medis($id_pasien, $tgl_awal, $id_rekam_medis);
      // print_r($this->db->last_query());
      $data_rawat = json_decode(json_encode(@$rawat[0]), true);
      if ($data_rawat && is_array($data_rawat)) {
        $rawat = array_merge(@$data_rawat, array("detail_rawat" => array()));
      }
      $data['rawat'] = $rawat;

      $pasien1 = $this->Data_pasien_model->get_medis_pasien($id_rekam_medis, $id_pasien);
      $data['pasien'] = $pasien1;
      $data['id_pasien'] = $id_pasien;
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $dokter = $this->Data_pasien_model->get_dokter();
      $data['dokter'] = $dokter;
      $data['info'] = $this->Informasi_pasien_model->show_informasi($id_pasien, $id_booking);
      $data['info_umum'] = $this->Informasi_pasien_model->get_umum($id_pasien, $id_booking);
      $data['info_klinis'] = $this->Informasi_pasien_model->get_klinis($id_pasien);
      $data['info_penunjang'] = $this->Informasi_pasien_model->get_penunjang($id_pasien);
      $data['info_summary'] = $this->Informasi_pasien_model->get_summary($id_pasien);
      $data['info_odontogram'] = $this->Informasi_pasien_model->get_odontogram($id_pasien);
      $data['info_asuransi'] = $this->Informasi_pasien_model->get_asuransi($id_pasien, $id_booking);
      $data['info_bayar'] = $this->Informasi_pasien_model->get_pembayaran($id_pasien, $id_booking);
      $data['tanggal_periksa_penunjang'] = $this->Informasi_pasien_model->get_tanggal_pemeriksaan($id_pasien);
      $data['_informasi_pasien'] = 1;
      $data['content'] = 'dokter/detail_informasi_pasien';
      $this->load->view('template/template', $data);
    endforeach;
  }

  function filter_pemeriksaan_klinis()
  {
    $tgl = $_POST['tgl'];
    $id_pasien = $_POST['id'];

    $this->db->select('*');
    $this->db->from('booking a');
    $this->db->join('rencana b', 'a.id_booking=b.id_booking');
    $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
    $this->db->join('rekam_medis d', 'a.id_booking=d.id_booking');
    $this->db->join('pemeriksaan_klinis_umum e', 'a.id_booking=e.id_booking');
    $this->db->join('pemeriksaan_klinis_khusus f', 'a.id_booking=f.id_booking');
    $this->db->where('a.id_pasien', $id_pasien);
    $this->db->where('d.id_pasien', $id_pasien);
    $this->db->where('e.id_pasien', $id_pasien);
    $this->db->where('f.id_pasien', $id_pasien);

    if ($tgl != 0) {
      $this->db->where('d.tanggal_periksa', $tgl);
    }

    $this->db->order_by('d.tanggal_periksa desc');
    $this->db->where('a.konfirmasi', 1);
    $this->db->limit(1);
    $data = $this->db->get('')->result();

    if (!empty($data)) {
?>
      <?php foreach ($data as $info) : ?>
        <div class="col-md-12"><br>
          <div class="col-md-6">
            <div class="col-md-12">
              <font style="font-weight: bold; font-size: 16px;">Pemeriksaan Ekstra Oral</font>
            </div>
            <div class="col-md-6"><br>
              <p>Wajah</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->wajah ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Bibir</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->wajah ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-12"><br>
              <p>Kelenjar Getah Bening</p>
            </div>
            <div class="col-md-12">
              <div class="col-md-6"><br>
                <p>Submandibula Kanan</p>
              </div>
              <div class="col-md-6"><br>
                <p><b><?php echo $info->submandibula_kanan ?></b></p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-6"><br>
                <p>Submandibula Kiri</p>
              </div>
              <div class="col-md-6"><br>
                <p><b><?php echo $info->submandibula_kiri ?></b></p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-6"><br>
                <p>Lainnya</p>
              </div>
              <div class="col-md-6"><br>
                <p><b><?php echo $info->lainnya ?></b></p>
              </div>
            </div>
            <div class="col-md-6"><br>
              <p>Kelainan Lainnya</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->submandibula_kanan ?></b></p>
            </div>
          </div>

          <div class="col-md-6" style="border-left: 1px solid #e0e0e0;">
            <div class="col-md-12">
              <font style="font-weight: bold; font-size: 16px;">Pemeriksaan Intra Oral</font>
            </div>
            <div class="col-md-6"><br>
              <p>Gingiva</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->gingiva ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Debris</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->debris ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Stain</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->stain ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Kalkulus</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->kalkulus ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Mukosa</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->mukosa ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Palatum</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->palatum ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Lidah</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->lidah ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Dasar Mulut</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->dasar_mulut ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Hubungan Rahang</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->hubungan_rahang ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Kelainan Gigi Geligi</p>
            </div>
            <div class="col-md-6"><br>
              <p><b><?php echo $info->kelainan_gigi_geligi ?></b></p>
            </div>
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
            <div class="col-md-6"><br>
              <p>Lainnya</p>
            </div>
            <div class="col-md-6"><br>
              <p><b>Tidak Ada</b></p>
            </div>
          </div>
          <div class="col-md-12"><br></div>
        </div>
      <?php endforeach; ?>
    <?php
    } else {
    ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_pemeriksaan_klinis_khusus()
  {
    $tgl = $_POST['tgl'];
    $id_pasien = $_POST['id'];

    $this->db->select('*');
    $this->db->from('booking a');
    $this->db->join('rencana b', 'a.id_booking=b.id_booking');
    $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
    $this->db->join('rekam_medis d', 'a.id_booking=d.id_booking');
    $this->db->join('pemeriksaan_klinis_umum e', 'a.id_booking=e.id_booking');
    $this->db->join('pemeriksaan_klinis_khusus f', 'a.id_booking=f.id_booking');
    $this->db->where('a.id_pasien', $id_pasien);
    $this->db->where('d.id_pasien', $id_pasien);
    $this->db->where('e.id_pasien', $id_pasien);
    $this->db->where('f.id_pasien', $id_pasien);

    if ($tgl != 0) {
      $this->db->where('d.tanggal_periksa', $tgl);
    }

    $this->db->order_by('d.tanggal_periksa desc');
    $this->db->where('a.konfirmasi', 1);
    $this->db->limit(1);
    $data = $this->db->get('')->result();


    if (!empty($data)) {
      foreach ($data as $info) :
      ?>
        <div class="form-group">
          <br><textarea name="keterangan" class="form-control" placeholder="Keterangan" readonly><?php echo $info->keterangan ?></textarea>
        </div>
      <?php
      endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_pemeriksaan_penunjang_radiologi()
  {

    $tgl = $_POST['tgl'];
    $id_pasien = $_POST['id'];

    $this->db->select('*');
    $this->db->from('booking a');
    $this->db->join('rencana b', 'a.id_booking=b.id_booking');
    $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
    $this->db->join('rekam_medis d', 'a.id_booking=d.id_booking');
    $this->db->join('pemeriksaan_penunjang e', 'a.id_booking=e.id_booking');
    $this->db->where('a.id_pasien', $id_pasien);
    $this->db->where('e.id_pasien', $id_pasien);
    $this->db->where('d.id_pasien', $id_pasien);

    if ($tgl != 0) {
      $this->db->where('d.tanggal_periksa', $tgl);
    }

    $this->db->where('a.konfirmasi', 1);
    $this->db->order_by('d.tanggal_periksa', 'DESC');
    $this->db->limit(1);
    $data = $this->db->get('')->result();


    if (!empty($data)) {
      foreach ($data as $info) :
      ?>
        <div class="col-md-12">
          <div class="col-md-6">
            <form value="<?php echo $info->radiologi ?>">
              <br><input type="radio" value="" name="" readonly <?= $info->radiologi == 'Sefalometri' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?>><span> Panoramik</span>
              <input type="radio" name="" value="" style="margin-left: 15px;" readonly <?= $info->radiologi == 'Panoramik' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?>><span> Sefalometri</span>
              <input type="radio" name="" value="" style="margin-left: 15px;" readonly <?= $info->radiologi == 'Panoramik' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri,Dental Regio' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?>><span> Trannscranial<span>
                  <input type="radio" name="" value="" style="margin-left: 15px;" readonly <?= $info->radiologi == 'Panoramik' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri' ? 'disabled' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Transcranial' ? 'disabled' : null ?> <?= $info->radiologi == 'Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Panoramik,Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Sefalometri,Transcranial,Dental Regio' ? 'checked' : null ?> <?= $info->radiologi == 'Transcranial,Dental Regio' ? 'checked' : null ?>><span> Dental, Regio<span>
            </form>
          </div>
          <div class="col-md-2">
            <br><textarea name="elemen_gigi" class="form-control" rows="1" readonly disabled><?php echo $info->gigi ?></textarea>
          </div>
        </div>

        <div class="col-md-8">
          <div class="form-group">
            <br><textarea name="keterangan" class="form-control" placeholder="Keterangan" readonly disabled><?php echo $info->keterangan_radiologi ?></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <input type="hidden" name="foto_radiologi_download" id="foto_radiologi_download" value="<?php echo $info->foto_radiologi ?>">
          <br><button onclick="download()" type="button" style="height: 35px; width: 150px; background-color: #f40049; color: white; border-radius: 5px;" class="btn btn-anim"><b>&nbsp;&nbsp;Download Foto</b></button>
        </div>
      <?php
      endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_pemeriksaan_penunjang_laboratorium()
  {
    $tgl = $_POST['tgl'];
    $id_pasien = $_POST['id'];

    $this->db->select('*');
    $this->db->from('booking a');
    $this->db->join('rencana b', 'a.id_booking=b.id_booking');
    $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
    $this->db->join('rekam_medis d', 'a.id_booking=d.id_booking');
    $this->db->join('pemeriksaan_penunjang e', 'a.id_booking=e.id_booking');
    $this->db->where('a.id_pasien', $id_pasien);
    $this->db->where('e.id_pasien', $id_pasien);
    $this->db->where('d.id_pasien', $id_pasien);

    if ($tgl != 0) {
      $this->db->where('d.tanggal_periksa', $tgl);
    }

    $this->db->where('a.konfirmasi', 1);
    $this->db->order_by('d.tanggal_periksa', 'DESC');
    $this->db->limit(1);
    $data = $this->db->get('')->result();


    if (!empty($data)) {
      foreach ($data as $info) :
      ?>
        <div class="col-md-8">
          <div class="col-md-4">
            <form>
              <br><input type="radio" name="" <?= $info->laboratorium == 'Darah Rutin' ? 'checked' : null ?> <?= $info->laboratorium != 'Darah Rutin' ? 'disabled' : null ?> readonly><span> Darah Rutin</span>
              <input type="radio" name="" style="margin-left: 15px;" readonly <?= $info->laboratorium == 'Darah Rutin' ? 'disabled' : null ?> <?= $info->laboratorium != 'Darah Rutin' ? 'checked' : null ?>><span> Lainnya</span>
            </form>
          </div>
          <div class="col-md-4">
            <form>
              <br><input type="text" name="" class="form-control" readonly value="<?= $info->laboratorium != 'Darah Rutin' ? $info->laboratorium : null ?>">
            </form>
          </div>
        </div>
        <div class="col-md-8">
          <div class="form-group">
            <br><textarea name="keterangan" class="form-control" placeholder="Keterangan" readonly><?php echo $info->keterangan_laboratorium ?></textarea>
          </div>
        </div>
        <div class="col-md-7">
          <input type="hidden" name="foto_laboratorium_download" id="foto_laboratorium_download" value="<?php echo $info->foto_laboratorium ?>" />
          <br><button type="button" onclick="download_lab()" style="height: 35px; width: 150px; background-color: #f40049; color: white; border-radius: 5px;" class="btn btn-anim"><b>&nbsp;&nbsp;Download Foto</b></a>
        </div>
      <?php
      endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
    <?php
    }
  }

  public function get_summary_rekam_medis($id_pasien = null, $dokter = null, $tgl = null)
  {
    echo json_encode($this->Data_pasien_model->get_summary_rekam_medis($id_pasien, $dokter, $tgl)->result());
  }

  function create_load_odontogram()
  {
    $tgl_awal = $_GET['tgl_awal'];
    //  $tgl_akhir = $_GET['tgl_akhir'];
    $id_pasien = $_GET['id_pasien3'];
    $rawat = $this->Informasi_pasien_model->get_one_rawat_by_id($id_pasien, $tgl_awal);
    //      print_r($this->db->last_query());
    $data_rawat = json_decode(json_encode($rawat[0]), true);
    $rawat = array_merge($data_rawat, array("detail_rawat" => array()));

    $data['rawat'] = $rawat;
    $this->load->view('owner/load_odontogram', $data);
  }

  function home()
  {

    $id_user = $this->session->userdata('id_user');

    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $data['cabang'] = $cabang;
    $data['dokter'] = $dokter;
    $data['pasien'] = $this->Home_model->get_pasien();
    $rencana_sebelum = $this->Home_model->get_rencana_sebelum();
    $data['rencana_sebelum'] = $rencana_sebelum;

    $bayar = $this->Data_pasien_model->get_bayar();
    $data['metodebayar'] = $bayar;

    $data['_antrian'] = 1;
    $data['content'] = 'dokter/home';
    $this->load->view('template/template', $data);
  }

  function home_keluarga($id_user)
  {

    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $user = $this->Data_pasien_model->get_user($id_user);
    $data['cabang'] = $cabang;
    $data['dokter'] = $dokter;
    $data['user'] = $user;
    $data['pasien'] = $this->Data_pasien_model->get_pasien($id_user);
    $rencana_sebelum = $this->Data_pasien_model->get_rencana_sebelum($id_user);
    $data['rencana_sebelum'] = $rencana_sebelum;

    $bayar = $this->Data_pasien_model->get_bayar();
    $data['metodebayar'] = $bayar;

    $data['_antrian'] = 1;
    $data['content'] = 'dokter/home_keluarga';
    $this->load->view('template/template', $data);
  }

  function data_keluarga()
  {
    $this->Home_model->tampil();
  }

  function tambah_pasien()
  {
    $data['_antrian'] = 1;
    $data['content'] = 'dokter/tambah_pasien';
    $this->load->view('template/template', $data);
  }

  public function tambah_pasien_k($id_user)
  {
    $user = $this->Data_pasien_model->get_user($id_user);
    $data['user'] = $user;
    $data['_antrian'] = 1;
    $data['content'] = 'dokter/tambah_pasien_k';
    $this->load->view('template/template', $data);
  }

  public function add_pasien()
  {
    $data_login = array(
      'nama_depan_u' => $this->input->post('nama_depan'),
      'nama_belakang_u' => $this->input->post('nama_belakang'),
      'tanggal_lahir' => $this->input->post('tanggal_lahir'),
      'jenis_kelamin' => $this->input->post('jenis_kelamin'),
      'email' => $this->input->post('email'),
      'no_hp' => $this->input->post('no_hp'),
      'level' => 'Pasien',
    );

    $this->Home_model->insert_login($data_login);
    $data = $this->Home_model->get_iduser($this->input->post('nama_depan'), $this->input->post('tanggal_lahir'), $this->input->post('nama_belakang'));
    $data_pasien = array(
      'id_user' => $data->id_user,
      'nama_depan' => $this->input->post('nama_depan'),
      'nama_belakang' => $this->input->post('nama_belakang'),
      'tanggal_lahir' => $this->input->post('tanggal_lahir'),
      'jenis_kelamin' => $this->input->post('jenis_kelamin'),
      'email' => $this->input->post('email'),
      'no_hp' => $this->input->post('no_hp'),
      'hubungan' => 'Anda',
    );
    $this->Home_model->insert_pasien($data_pasien);
    $this->session->set_flashdata('notif', '<div class="alert alert-success alert-dismissible"> Data Mahasiswa berhasil ditambah.
    </div>');

    redirect(site_url('doctor/home'));
  }

  public function add_pasien_k()
  {
    $data_pasien = array(
      'id_user' => $this->input->post('id_user'),
      'nama_depan' => $this->input->post('nama_depan'),
      'nama_belakang' => $this->input->post('nama_belakang'),
      'tanggal_lahir' => $this->input->post('tanggal_lahir'),
      'jenis_kelamin' => $this->input->post('jenis_kelamin'),
      'email' => $this->input->post('email'),
      'no_hp' => $this->input->post('no_hp'),
      'hubungan' => $this->input->post('hubungan'),
    );
    $this->Home_model->insert_pasien($data_pasien);
    $this->session->set_flashdata('notif', '<div class="alert alert-success alert-dismissible"> Data Mahasiswa berhasil ditambah.
    </div>');

    redirect(site_url('doctor/home'));
  }

  public function add_booking()
  {
    $booking = substr(md5(rand()), 0, 9);
    $id_booking = base64_encode($booking);
    $data1 = array(
      'id_booking' => $id_booking,
      'id_user' => $this->input->post("id_user"),
      'id_pasien' => $this->input->post("id_pasien2"),
      'id_cabang' => $this->input->post("id_cabang2"),
      'id_dokter' => $this->input->post("id_dokter2"),
      'status' => $this->input->post("status"),
    );


    $id_pasien = $this->input->post("id_pasien2");
    $id_cabang = $this->input->post("id_cabang2");
    $id_dokter = $this->input->post("id_dokter2");

    if ($id_pasien == "" || $id_cabang == "" || $id_dokter == "") {
      echo "<script>alert('Pastikan data terisi semua!');history.go(-1);</script>";
    } else {
      $query = $this->Model_booking->insert($data1);
      $this->session->set_flashdata('notif', '<div class="alert alert-success alert-dismissible"> Data Mahasiswa berhasil ditambah.
      </div>');
      $id_pasien = $this->input->post("id_pasien");

      redirect(base_url('doctor/data_booking/' . $id_pasien . '/' . $id_booking));
    }
  }

  function data_booking($id_pasien, $id_booking)
  {
    $id_user = $this->session->userdata('id_user');
    $booking1 = $this->Data_pasien_model->get_booking($id_booking);
    $data['booking'] = $booking1;

    $pasien1 = $this->Data_pasien_model->get_pasien_id($id_booking);
    $data['pasien'] = $pasien1;

    //echo $id_booking;
    $dokter = $this->Data_pasien_model->get_dokter_id($id_booking);
    $data['dokter'] = $dokter;

    $bayar = $this->Metode_model->get_all();
    $data['metodebayar'] = $bayar;
    $data['_antrian'] = 1;
    $data['content'] = 'dokter/booking';
    $this->load->view('template/template', $data);
  }

  function konfirmasi_janji()
  {
    $booking = $this->Home_model->get_booking();
    $data['booking'] = $booking;
    $data['_konfirmasi'] = 1;
    $data['content'] = 'dokter/konfirmasi_janji';
    $this->load->view('template/template', $data);
  }

  public function konfirmasi()
  {
    $konfirmasi = '1';
    $data_booking = array(
      'konfirmasi' => $konfirmasi,
    );

    $rekam_medis = substr(md5(rand()), 0, 9);
    $id_rekam_medis = base64_encode($rekam_medis);
    $status = '0';
    $data_rekam_medis = array(
      'id_rekam_medis' => $id_rekam_medis,
      'id_booking' => $this->input->post('id_booking'),
      'id_pasien' => $this->input->post('id_pasien'),
      'status' => $status,
    );

    $this->Home_model->add_rekam_medis($data_rekam_medis);
    $this->Home_model->update_booking($this->input->post('id_booking'), $data_booking);

    redirect(site_url('doctor/konfirmasi_janji'));
  }

  public function konfirmasi_tolak()
  {
    $konfirmasi = '2';
    $data_booking = array(
      'konfirmasi' => $konfirmasi,
      'alasan_tolak' => $this->input->post('alasan_tolak'),
    );

    $this->Home_model->update_booking($this->input->post('id_booking'), $data_booking);

    redirect(site_url('doctor/konfirmasi_janji'));
  }

  public function registrasi_janji()
  {
    $janji = $this->Home_model->get_data_janji();
    $data['janji'] = $janji;
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $data['cabang'] = $cabang;
    $data['dokter'] = $dokter;
    $data['_registrasi'] = 1;
    $data['content'] = 'dokter/registrasi_janji';
    $this->load->view('template/template', $data);
  }

  public function update_janji()
  {
    $status_r = '1';
    $data_janji = array(
      'status' => $status_r,
    );
    $data_antrian = array(
      'id_booking' => $this->input->post('id_booking'),
      'id_pasien' => $this->input->post('id_pasien'),
      'id_dokter' => $this->input->post('id_dokter'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
    );
    $this->Home_model->update_rekam_medis($this->input->post('id_booking'), $data_janji);
    $this->Home_model->add_antrian($data_antrian);
    redirect(site_url('doctor/registrasi_janji'));
  }

  public function update_rencana()
  {
    $data_rencana = array(
      'id_booking' => $this->input->post('id_booking'),
      'tanggal_rencana' => $this->input->post('tanggal_rencana'),
      'jam_rencana' => $this->input->post('jam_rencana'),
    );
    $this->Home_model->update_rencana($this->input->post('id_rcn'), $data_rencana);
    $this->session->set_flashdata('notif', '<div class="alert alert-success alert-dismissible"> Data Mahasiswa berhasil ditambah.
  </div>');
    redirect(site_url('doctor/registrasi_janji'));
  }

  public function pembayaran()
  {
    $bayar = $this->Home_model->get_data_bayar();
    $data['bayar'] = $bayar;
    $data['_pembayaran'] = 1;
    $data['content'] = 'dokter/pembayaran';
    $this->load->view('template/template', $data);
  }

  public function metode_bayar($id_booking)
  {
    $id_booking = $this->uri->segment(3);
    $data = array(
      'title' => 'Metode Pembayaran',
      'pembayaran' => $this->Home_model->edit_pembayaran($id_booking),
    );
    $bayar = $this->Home_model->get_proses_bayar($id_booking);
    $data['bayar'] = $bayar;
    $layanan = $this->Home_model->get_layanan($id_booking);
    $data['layanan'] = $layanan;
    $metode = $this->Metode_model->get_all();
    $data['metodebayar'] = $metode;
    $diskon = $this->Home_model->get_diskon();
    $data['diskon'] = $diskon;
    $data['_pembayaran'] = 1;
    $data['content'] = 'dokter/metode_pembayaran';
    $this->load->view('template/template', $data);
  }

  private function _uploadImage()
  {
    $config['upload_path']          = './images/asuransi/';
    $config['allowed_types']        = 'gif|jpg|png|jpeg';
    $config['file_name']            = $this->input->post('id_booking');
    $config['overwrite']            = true;
    $config['max_size']             = 1024; // 1MB
    $config['encrypt_name']         = true;
    // $config['max_width']            = 1024;
    // $config['max_height']           = 768;

    $this->load->library('upload', $config);

    if ($this->upload->do_upload('foto_asuransi')) {
      return $this->upload->data("file_name");
    }
  }

  public function update_bayar()
  {
    $status_r = '3';
    $data_bayar = array(
      'diagnosis'   => $this->input->post('diagnosa'),
      'grandtotal'  => $this->input->post('hasil'),
      'status'      => $status_r,
    );
    $status_b = '1';
    $data_booking = array(
      'status' => $status_b,
    );

    $data_rencana = array(
      'id_metode' => $this->input->post('jenis_pembayaran'),
      'provider' => $this->input->post('provider'),
      'kategori_asuransi' => $this->input->post('kasuransi'),
      'nomor_asuransi' => $this->input->post('no_asuransi'),
      'foto_asuransi' => $this->_uploadImage(),
    );
    $this->Home_model->update_booking($this->input->post('id_booking'), $data_booking);
    $this->Home_model->update_rekam_medis($this->input->post('id_booking'), $data_bayar);
    $this->Home_model->update_rencana_bayar($this->input->post('id_booking'), $data_rencana);
    redirect(site_url('doctor/pembayaran'));
  }

  public function laporan_harian()
  {
    $laporan = $this->Home_model->get_laporan();
    $data['laporan'] = $laporan;
    $data['harian'] = $this->Home_model->get_harian();
    $data['_laporan_pemeriksaan'] = 1;
    $data['content'] = 'dokter/laporan_harian';
    $this->load->view('template/template', $data);
  }

  public function get_iddok()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('id_dokter');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
    endforeach;
    redirect('doctor/laporan_pemeriksaan/' . $id_dokter);
  }

  public function laporan_sharingfee()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $laporan = $this->Home_model->get_laporan_pemeriksaan($id_dokter);
      $lap_fee = $this->Home_model->get_fee();
      $data['laporan'] = $laporan;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_($id_dokter);
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['id_dokter'] = $id_dokter;
      $data['lap_fee'] = $lap_fee;
      $data['_laporan_pemeriksaan'] = 1;
    endforeach;
    $data['content'] = 'dokter/laporan_pemeriksaan';
    $this->load->view('template/template', $data);
  }

  public function laporan_pemeriksaan()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $laporan = $this->Home_model->get_laporan_pemeriksaan($id_dokter);
      $lap_fee = $this->Home_model->get_fee_dokter($id_dokter);
      $data['laporan'] = $laporan;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan($id_dokter);
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['id_dokter'] = $id_dokter;
      $data['lap_fee'] = $lap_fee;
      $data['_laporan_pemeriksaan'] = 1;
      $data['content'] = 'dokter/laporan_pemeriksaan';
      $this->load->view('template/template', $data);
    endforeach;
  }

  public function laporan_pemeriksaan_m()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $laporan = $this->Home_model->get_laporan_pemeriksaan($id_dokter);
      $data['laporan'] = $laporan;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_m($id_dokter);
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['id_dokter'] = $id_dokter;
      $data['_laporan_pemeriksaan'] = 1;
      $data['content'] = 'dokter/laporan_pemeriksaan_m';
      $this->load->view('template/template', $data);
    endforeach;
  }

  public function laporan_pemeriksaan_b()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $laporan = $this->Home_model->get_laporan_pemeriksaan($id_dokter);
      $data['laporan'] = $laporan;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_b($id_dokter);
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['id_dokter'] = $id_dokter;
      $data['_laporan_pemeriksaan'] = 1;
      $data['content'] = 'dokter/laporan_pemeriksaan_b';
      $this->load->view('template/template', $data);
    endforeach;
  }


  public function sharing_fee()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $laporan = $this->Home_model->get_laporan_pemeriksaan($id_dokter);
      $data['laporan'] = $laporan;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_($id_dokter);
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['id_dokter'] = $id_dokter;
      $data['_laporan_pemeriksaan'] = 1;
      $data['content'] = 'dokter/personal_sharing_fee';
      $this->load->view('template/template', $data);
    endforeach;
  }

  public function laporan_harian_dokter()
  {
    $laporan = $this->Home_model->get_laporan();
    $data['laporan'] = $laporan;
    $data['harian'] = $this->Home_model->get_perdokter();
    $data['_laporan_pemeriksaan'] = 1;
    $data['content'] = 'dokter/laporan_harian_d';
    $this->load->view('template/template', $data);
  }

  public function export_detail()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['title'] = 'Laporan Detail Pemeriksaan Dokter ' . $nama_dokter;
      $data['laporan'] = $this->Home_model->get_laporan_pemeriksaan($id_dokter);

      $this->load->view('dokter/vw_laporan_detail', $data);
    endforeach;
  }

  public function export_pemeriksaan()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['title'] = 'Laporan Total Pendapatan Pemeriksaan Harian Dokter ' . $nama_dokter;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan($id_dokter);

      $this->load->view('dokter/vw_laporan_pendapatan_pemeriksaan', $data);
    endforeach;
  }

  public function export_pemeriksaan_m()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['title'] = 'Laporan Total Pendapatan Pemeriksaan Mingguan Dokter ' . $nama_dokter;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_m($id_dokter);

      $this->load->view('dokter/vw_laporan_pendapatan_pemeriksaan_m', $data);
    endforeach;
  }

  public function export_pemeriksaan_b()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();

    foreach ($dokter as $key) :
      $id_dokter = $key->id_dokter;
      $nama_dokter = $key->nama_dokter;
      $spesialis = $key->spesialis;
      $data['nama_dokter'] = $nama_dokter;
      $data['spesialis'] = $spesialis;
      $data['title'] = 'Laporan Total Pendapatan Pemeriksaan Bulanan Dokter ' . $nama_dokter;
      $data['harian'] = $this->Home_model->get_laporan_pendapatan_b($id_dokter);

      $this->load->view('dokter/vw_laporan_pendapatan_pemeriksaan_b', $data);
    endforeach;
  }

  public function export_harian()
  {
    $data['title'] = 'Laporan Total Pendapatan Harian';
    $data['harian'] = $this->Home_model->get_harian();

    $this->load->view('dokter/vw_laporan_pendapatan_harian', $data);
  }

  public function export_per_dokter()
  {
    $data['title'] = 'Laporan Pendapatan Harian Dokter';
    $data['perdokter'] = $this->Home_model->get_perdokter();

    $this->load->view('dokter/vw_laporan_perdokter', $data);
  }
  function filter_informasi_pasien()
  {
    $id_user = $this->session->userdata('id_user');
    $this->db->select('*');
    $this->db->from('dokter a');
    $this->db->join('login_session b', 'a.id_user=b.id_user');
    $this->db->where('a.id_user', $id_user);
    $dokter = $this->db->get('')->result();
    foreach ($dokter as $key) :
      $id_dokter2 = $key->id_dokter;
    endforeach;
    if (!empty($_GET['id_dokter'])) {
      $id_dokter = $_GET['id_dokter'];
    } else if (empty($_GET['id_dokter'])) {
      $id_dokter = $id_dokter2;
    }
    $tgl = $_GET['tgl'];


    $konf = '1';
    $this->db->select('b.tanggal_rencana,b.jam_rencana_mulai, b.jam_rencana_selesai,d.nama_dokter,c.nama_depan,c.nama_belakang,c.hubungan,f.id_rekam_medis,a.status,c.id_pasien,a.id_booking,c.id_user');
    $this->db->from('booking a');
    $this->db->join('rencana b', 'a.id_booking=b.id_booking');
    $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
    $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
    $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
    $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
    $this->db->join('login_session g', 'a.id_user=g.id_user');
    $this->db->where('a.konfirmasi', $konf);

    if ($tgl != 0) {
      $this->db->where('b.tanggal_rencana', $tgl);
    }
    $this->db->where('a.id_dokter', $id_dokter);
    $this->db->where_not_in('a.status', 3);
    $this->db->where_not_in('a.status', 2);
    $this->db->group_by('a.id_booking');
    $this->db->order_by('b.tanggal_rencana', 'desc');
    $data = $this->db->get('')->result();
    if (!empty($data)) {
    ?>
      <?php foreach ($data as $result) : ?>
        <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
        <h5><b><?php echo $tgl ?> </b></h5>
        <div class="col-md-12 d" style="margin: 2px;">
          <div class="col-md-6" style="text-align: left;">
            <h5 style="font-weight: bold;"><?php echo $result->jam_rencana_mulai ?> - <?php echo $result->jam_rencana_selesai ?></h5>
            <h6>Drg. <?php echo $result->nama_dokter ?></h6>
            <br>
            <?php if ($result->status == 0) { ?>
              <font style="background: #FFFF00; color: #000;" class="label label-warning">Menunggu <br> Pendaftaran</font>
            <?php } elseif ($result->status == 1) { ?>
              <h6 class="label label-success">Sudah Terdaftar</h6>
            <?php } ?>
          </div>
          <div class="col-md-6" style="padding-right: 10px;">
            <h6 style="font-weight: bold ;"><?php echo $result->nama_depan ?> <?php echo $result->nama_belakang ?></h6>
            <p style="font-size: 10px;">No. Rekam Medis <?php echo $result->id_rekam_medis ?></p>
            <p style="font-size: 10px;">
              <?php
              if ($result->hubungan == 'Anda') {
                echo "Atas nama sendiri ";
              } elseif ($result->hubungan == 'Anak') {
                echo $result->hubungan . " " . "<span id ='hubung_id'></span>";
              } elseif ($result->hubungan == 'Ibu') {
                echo $result->hubungan . " " . "<span id ='hubung_id2'></span>";
              } elseif ($result->hubungan == 'Ayah') {
                echo $result->hubungan . " " . "<span id ='hubung_id3'></span>";
              } elseif ($result->hubungan == 'Istri') {
                echo $result->hubungan . " " . "<span id ='hubung_id4'></span>";
              } elseif ($result->hubungan == 'Suami') {
                echo $result->hubungan . " " . "<span id ='hubung_id5'></span>";
              } elseif ($result->hubungan == 'Saudara') {
                echo $result->hubungan . " " . "<span id ='hubung_id6'></span>";
              }
              ?>
            </p>
            <select hidden name="id_user" id="id_user">
              <option value="0" selected></option>
            </select>
            <a href="<?php echo site_url('doctor/detail_informasi_pasien/' . $result->id_pasien . '/' . $result->id_booking) ?>" class="btn btn-anim" style="height: 35px; width: 70px; background-color: #f40049; color: white; border-radius: 5px"><span> Lihat</span></a>
          </div>
        </div>
      <?php endforeach; ?>

      <script>
        $(document).ready(function() {
          hubungan_pasien();
          $('#id_user').change(function() {
            // let a = $(this).val();
            // console.log(a);
          });
        });

        function hubungan_pasien() {
          var id = $('#id_user').val();
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id').html(data);
            }
          })
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id2').html(data);
            }
          })
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id3').html(data);
            }
          })
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id4').html(data);
            }
          })
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id5').html(data);
            }
          })
          $.ajax({
            url: "<?= base_url('doctor/get_hubungan_pasien/' . $result->id_user) ?>",
            data: {
              id: id
            },
            success: function(data) {
              // console.log(data);
              $('#hubung_id6').html(data);
            }
          });
        }
      </script>
    <?php
    } else {
    ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_profil()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $id = $_GET['id'];
    if ($id == 0) {
      $konfirmasi = '1';
      $stt = '0';
      $stt2 = '0';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.konfirmasi', $konfirmasi);
      $this->db->where('a.status', $stt);
      $this->db->where('f.status', $stt2);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $konfirmasi = '1';
      $stt = '0';
      $stt2 = '0';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.id_dokter', $id);
      $this->db->where('a.konfirmasi', $konfirmasi);
      $this->db->where('a.status', $stt);
      $this->db->where('f.status', $stt2);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
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
                <p><?php echo $result->jam_rencana  ?></p>
              </font>
            </div>
            <div class="body">
              <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
              <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
              <div class="form-group">

                <?php if ($result->konfirmasi == '0') { ?>
                  <font style="background-color: yellow; color: black; padding: 5px" size="2px">
                    Belum terkonfirmasi </font>
                <?php } elseif ($result->konfirmasi == '2') { ?>
                  <font style="background-color: red; color: black; padding: 5px" size="2px">
                    Ditolak</font>
                <?php } else { ?>
                  <font style="background-color: lightgreen; color: black; padding: 5px" size="2px">
                    Sudah terkonfirmasi</font>
                <?php } ?>
                <!-- <font size="2px">   <a href="#"  data-toggle="modal" data-target="#myModal<?php echo $result->id_pasien ?>" style=" color: salmon; padding: 5px; float: right;"> Lihat/Ubah Rencana </a></font> -->

                <div id="myModal<?php echo $result->id_pasien ?>" class="modal">
                  <form class="form-horizontal" action="<?php echo base_url('Booking/update_rencana/'); ?>" method="post" enctype="multipart/form-data" role="form">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title" style="text-align: center;"><b>Jadwal yang akan datang</b></h4>
                        </div>
                        <div class="col-lg-12">

                          <div class="modal-body">
                            <h3 class="madal-body">
                              <center><?php echo $result->nama_depan ?> <?php echo $result->nama_belakang ?></center>
                            </h3>
                            <?php if ($result->konfirmasi == '0' || $result->konfirmasi == '2') { ?>
                              <?php if ($result->konfirmasi == '0') { ?>
                                <font style="background-color: yellow; color: black; padding: 5px; float: right;">
                                  Belum terkonfirmasi </font>
                              <?php } else { ?>
                                <p>
                                  <center>alasan ditolak:</center>
                                </p>
                                <h5>
                                  <center><?php echo $result->alasan_tolak ?></center>
                                </h5><br>
                                <h6>
                                  <center>Silahkan menjadwalkan ulang di bawah ini</center>
                                </h6><br>
                                <font style="background-color: red; color: black; padding: 5px; float: right;">
                                  Ditolak</font>
                                <?php } ?>s
                                <br>
                                <div class="form-group">
                                  <label class="col-lg-3 col-sm-3 control-label">Nama Dokter</label>
                                  <div class="col-lg-9">
                                    <select class="form-control" name="id_dokter" required data-required-msg="Address is required">
                                      <option value="<?php echo $result->id_dokter  ?>" disabled selected style="display: none;"><?php echo $result->nama_dokter  ?></option>
                                      <?php foreach ($dokter->result() as $result2) : ?>
                                        <option value="<?php echo $result2->id_dokter  ?>"><?php echo $result2->nama_dokter  ?></option>
                                      <?php endforeach; ?>
                                    </select>

                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-lg-3 col-sm-3 control-label">Nama Cabang</label>
                                  <div class="col-lg-9">
                                    <select class="form-control" name="id_cabang" required data-required-msg="Address is required">
                                      <option value="<?php echo $result->id_cabang  ?>" disabled selected style="display: none;"><?php echo $result->nama_cabang  ?></option>
                                      <?php foreach ($cabang->result() as $result2) : ?>
                                        <option value="<?php echo $result2->id_cabang ?>"><?php echo $result2->nama_cabang  ?></option>
                                      <?php endforeach; ?>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-lg-3 col-sm-3 control-label">Tanggal</label>
                                  <div class="col-lg-3">
                                    <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                                    <input type="text" id="date" class="form-control" name="tanggal_rencana" value="<?php echo $tgl ?>" readonly>
                                  </div>
                                  <div class="col-lg-6">
                                    <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                                    <input type="date" id="date" class="form-control" name="tanggal_rencana" value="<?php echo $tgl ?>">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-lg-3 col-sm-3 control-label">Waktu</label>
                                  <div class="col-lg-9">
                                    <select class="form-control" name="jam_rencana" required data-required-msg="Address is required">
                                      <option value="<?php echo $result->jam_rencana  ?>" disabled selected style="display: none;"><?php echo $result->jam_rencana  ?></option>
                                      <?php
                                      $query = $this->db->query('select * from jadwal_dokter where id_dokter="' . $result->id_dokter . '"');
                                      foreach ($query->result() as $hasil) :
                                      ?>
                                        <option value="<?php echo $hasil->jam_mulai  ?>-<?php echo $hasil->jam_tutup  ?>"><?php echo $hasil->jam_mulai  ?>-<?php echo $hasil->jam_tutup  ?></option>
                                      <?php endforeach; ?>
                                    </select>
                                  </div>
                                </div>

                              <?php } else { ?>
                                <h5>
                                  <center>dengan dokter <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></center>
                                </h5>
                                <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                                <h5>
                                  <center>pada tanggal <?php echo $tgl  ?> jam <?php echo $result->jam_rencana  ?></center>
                                </h5>
                                <br>
                                <center>
                                  <font style="background-color: lightgreen; color: black; padding: 5px;">
                                    Sudah terkonfirmasi</font>
                                </center>
                                <br>
                                <p>
                                  <center>Kode Booking:</center>
                                </p>
                                <b>
                                  <h4 class="madal-title">
                                    <center><?php echo $result->id_booking ?></center>
                                  </h4>
                                </b>
                                <h6>
                                  <center>Tunjukkan kode booking ini pada saat registrasi di klinik kami</center>
                                </h6>
                                <h6>
                                  <center>Sampai Berjumpa</center>
                                </h6>

                                <br>
                              <?php } ?>
                          </div>

                          <input type="hidden" class="form-control" name="id_rcn" value="<?php echo $result->id_rcn ?>">
                          <input type="hidden" class="form-control" name="id_booking" value="<?php echo $result->id_booking ?>">
                          <hr>
                        </div>
                        <div class="modal-footer">
                          <?php if ($result->konfirmasi == '0' || $result->konfirmasi == '2') { ?>
                            <button class="btn salmon" type="submit"> Ubah&nbsp;</button>
                            <button type="button" class="btn btn-warning" data-dismiss="modal"> Batal</button>
                          <?php } else { ?>
                            <button type="button" class="btn btn-warning" data-dismiss="modal"> Kembali</button>
                          <?php } ?>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_tanggal()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $tgl = $_GET['tgl'];
    if ($tgl == 0) {
      $konfirmasi = '1';
      $stt = '0';
      $stt2 = '0';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.konfirmasi', $konfirmasi);
      $this->db->where('a.status', $stt);
      $this->db->where('f.status', $stt2);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $konfirmasi = '1';
      $stt = '0';
      $stt2 = '0';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('b.tanggal_rencana', $tgl);
      $this->db->where('a.konfirmasi', $konfirmasi);
      $this->db->where('a.status', $stt);
      $this->db->where('f.status', $stt2);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
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
                <p><?php echo $result->jam_rencana  ?></p>
              </font>
            </div>
            <div class="body">
              <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
              <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
              <div class="form-group">

                <?php if ($result->konfirmasi == '0') { ?>
                  <font style="background-color: yellow; color: black; padding: 5px" size="2px">
                    Belum terkonfirmasi </font>
                <?php } elseif ($result->konfirmasi == '2') { ?>
                  <font style="background-color: red; color: black; padding: 5px" size="2px">
                    Ditolak</font>
                <?php } else { ?>
                  <font style="background-color: lightgreen; color: black; padding: 5px" size="2px">
                    Sudah terkonfirmasi</font>
                <?php } ?>
                <br>
                <!-- <font size="2px">   <a href="#"  data-toggle="modal" data-target="#myModal<?php echo $result->id_pasien ?>" style=" color: salmon; padding: 5px; float: right;"> Lihat Rencana </a></font> -->

                <div id="myModal<?php echo $result->id_pasien ?>" class="modal" style="top: 50px;">
                  <form class="form-horizontal" action="<?php echo base_url('Booking/update_rencana/'); ?>" method="post" enctype="multipart/form-data" role="form">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title" style="text-align: center;"><b>Jadwal yang akan datang</b></h4>
                        </div>
                        <div class="col-lg-12">

                          <div class="modal-body">
                            <h3 class="madal-body">
                              <center><?php echo $result->nama_depan ?> <?php echo $result->nama_belakang ?></center>
                            </h3>
                            <?php if ($result->konfirmasi == '0' || $result->konfirmasi == '2') { ?>
                              <?php if ($result->konfirmasi == '0') { ?>
                                <font style="background-color: yellow; color: black; padding: 5px; float: right;">
                                  Belum terkonfirmasi </font>
                              <?php } else { ?>
                                <p>
                                  <center>alasan ditolak:</center>
                                </p>
                                <h5>
                                  <center><?php echo $result->alasan_tolak ?></center>
                                </h5><br>
                                <h6>
                                  <center>Silahkan menjadwalkan ulang di bawah ini</center>
                                </h6><br>
                                <font style="background-color: red; color: black; padding: 5px; float: right;">
                                  Ditolak</font>
                              <?php } ?>

                              <br>
                              <div class="form-group">
                                <label class="col-lg-3 col-sm-3 control-label">Nama Dokter</label>
                                <div class="col-lg-9">
                                  <select class="form-control" name="id_dokter" required data-required-msg="Address is required">
                                    <option value="<?php echo $result->id_dokter  ?>" disabled selected style="display: none;"><?php echo $result->nama_dokter  ?></option>
                                    <?php foreach ($dokter->result() as $result2) : ?>
                                      <option value="<?php echo $result2->id_dokter  ?>"><?php echo $result2->nama_dokter  ?></option>
                                    <?php endforeach; ?>
                                  </select>

                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-lg-3 col-sm-3 control-label">Nama Cabang</label>
                                <div class="col-lg-9">
                                  <select class="form-control" name="id_cabang" required data-required-msg="Address is required">
                                    <option value="<?php echo $result->id_cabang  ?>" disabled selected style="display: none;"><?php echo $result->nama_cabang  ?></option>
                                    <?php foreach ($cabang->result() as $result2) : ?>
                                      <option value="<?php echo $result2->id_cabang ?>"><?php echo $result2->nama_cabang  ?></option>
                                    <?php endforeach; ?>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-lg-3 col-sm-3 control-label">Tanggal</label>
                                <div class="col-lg-3">
                                  <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                                  <input type="text" id="date" class="form-control" name="tanggal_rencana" value="<?php echo $tgl ?>" readonly>
                                </div>
                                <div class="col-lg-6">
                                  <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                                  <input type="date" id="date" class="form-control" name="tanggal_rencana" value="<?php echo $tgl ?>">
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-lg-3 col-sm-3 control-label">Waktu</label>
                                <div class="col-lg-9">
                                  <select class="form-control" name="jam_rencana" required data-required-msg="Address is required">
                                    <option value="<?php echo $result->jam_rencana  ?>" disabled selected style="display: none;"><?php echo $result->jam_rencana  ?></option>
                                    <?php
                                    $query = $this->db->query('select * from jadwal_dokter where id_dokter="' . $result->id_dokter . '"');
                                    foreach ($query->result() as $hasil) :
                                    ?>
                                      <option value="<?php echo $hasil->jam_mulai  ?>-<?php echo $hasil->jam_tutup  ?>"><?php echo $hasil->jam_mulai  ?>-<?php echo $hasil->jam_tutup  ?></option>
                                    <?php endforeach; ?>
                                  </select>
                                </div>
                              </div>

                            <?php } else { ?>
                              <h5>
                                <center>dengan dokter <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></center>
                              </h5>
                              <?php $tgl = date('d F Y', strtotime($result->tanggal_rencana)); ?>
                              <h5>
                                <center>pada tanggal <?php echo $tgl  ?> jam <?php echo $result->jam_rencana  ?></center>
                              </h5>
                              <br>
                              <center>
                                <font style="background-color: lightgreen; color: black; padding: 5px;">
                                  Sudah terkonfirmasi</font>
                              </center>
                              <br>
                              <p>
                                <center>Kode Booking:</center>
                              </p>
                              <b>
                                <h4 class="madal-title">
                                  <center><?php echo $result->id_booking ?></center>
                                </h4>
                              </b>
                              <h6>
                                <center>Tunjukkan kode booking ini pada saat registrasi di klinik kami</center>
                              </h6>
                              <h6>
                                <center>Sampai Berjumpa</center>
                              </h6>

                              <br>
                            <?php } ?>
                          </div>

                          <input type="hidden" class="form-control" name="id_rcn" value="<?php echo $result->id_rcn ?>">
                          <input type="hidden" class="form-control" name="id_booking" value="<?php echo $result->id_booking ?>">
                          <hr>
                        </div>
                        <div class="modal-footer">
                          <?php if ($result->konfirmasi == '0' || $result->konfirmasi == '2') { ?>
                            <button class="btn salmon" type="submit"> Ubah&nbsp;</button>
                            <button type="button" class="btn btn-warning" data-dismiss="modal"> Batal</button>
                          <?php } else { ?>
                            <button type="button" class="btn btn-warning" data-dismiss="modal"> Kembali</button>
                          <?php } ?>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_profil_2()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $id = $_GET['id'];
    if ($id == 0) {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.id_dokter', $id);
      $this->db->where('a.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
        <?php if ($result->konfirmasi == '1' && $result->status == '1') { ?>
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
                  <p><?php echo $result->jam_rencana  ?></p>
                </font>
              </div>
              <div class="body">
                <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
                <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
                <div class="form-group">
                  <font style="background-color: lightgreen; color: black; padding: 5px" size="2px">
                    Telah Terbayar</font>
                </div>
              </div>
            </div>
          </div>
        <?php } ?>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_tanggal_2()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $tgl = $_GET['tgl'];
    if ($tgl == 0) {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('b.tanggal_rencana', $tgl);
      $this->db->where('a.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
        <?php if ($result->konfirmasi == '1' && $result->status == '1') { ?>
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
                  <p><?php echo $result->jam_rencana  ?></p>
                </font>
              </div>
              <div class="body">
                <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
                <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
                <div class="form-group">
                  <font style="background-color: lightgreen; color: black; padding: 5px" size="2px">
                    Telah Terbayar</font>
                  <!-- <font size="2px">   <a href="#" style=" color: salmon; padding: 5px; float: right;"> Lihat/Ubah Rencana </a></font> -->
                </div>
              </div>
            </div>
          </div>
        <?php } ?>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function filter_profil_3()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $id = $_GET['id'];
    if ($id == 0) {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('f.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('a.id_dokter', $id);
      $this->db->where('f.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
        <?php if ($result->konfirmasi == '1' && $result->status == '1') { ?>
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
                  <p><?php echo $result->jam_rencana  ?></p>
                </font>
              </div>
              <div class="body">
                <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
                <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
                <div class="form-group">
                  <font style="background-color: yellow; color: black; padding: 5px" size="2px">
                    Sedang Pemeriksaan</font>
                </div>
              </div>
            </div>
          </div>
        <?php } ?>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
      <?php
    }
  }

  function ajax_add_temp()
  {
    // $check = $this->Data_pasien_model->get_cek_keadaan_gigi($this->input->post('idSvg'),$this->input->post('id_pemeriksaan'))->num_rows();

    // if($check > 0){
    //   $data = array(
    //     'idSvg' => $this->input->post('idSvg'),
    //     'idPemeriksaan' => $this->input->post('id_pemeriksaan'),
    //     'ket_pemeriksaan' => $this->input->post('control'),
    //   );
    //   $this->Data_pasien_model->update_svg($check->id,$data);
    //   echo json_encode(array('status' => TRUE));
    // }else{
    $data = array(
      'idSvg' => $this->input->post('idSvg'),
      'idPemeriksaan' => $this->input->post('id_pemeriksaan'),
      'ket_pemeriksaan' => $this->input->post('control'),
      'session_id' => $this->input->post('session_id')
    );

    $this->Data_pasien_model->add_svg($data);
    echo json_encode(array('status' => TRUE));
    // }  

  }

  public function ajax_id_svg($id, $idpemeriksaan, $session_id)
  {
    $data = $this->Data_pasien_model->get_by_id_svg($id, $idpemeriksaan, $session_id);
    echo json_encode($data);
  }

  function create_load()
  {
    $tgl_awal = $_GET['tgl_awal'];
    //  $tgl_akhir = $_GET['tgl_akhir'];
    $id_pasien = $_GET['id_pasien'];
    $rawat = $this->Home_model->get_one_rawat_by_id($id_pasien, $tgl_awal);
    //      print_r($this->db->last_query());
    $data_rawat = json_decode(json_encode($rawat[0]), true);
    $rawat = array_merge($data_rawat, array("detail_rawat" => array()));

    $data['rawat'] = $rawat;
    $this->load->view('dokter/load_odontogram', $data);
  }

  public function create_odontogram_temp()
  {
    $id_booking = $this->input->post('id_booking');
    $id_rekam_medis = $this->input->post('id_rekam_medis');
    $odontogram = $this->input->post('odontogram');

    $data_pemeriksaan_odontogram = array(
      'id_pasien' => $this->input->post('id_pasien'),
      'id_booking' => $this->input->post('id_booking'),
      'id_rekam_medis' => $this->input->post('id_rekam_medis'),
      'odontogram' => $this->input->post('odontogram'),
      'tgl_pemeriksaan' => date('Y-m-d')
    );

    $this->Pemeriksaan_model->insert_pemeriksaan_odontogram($data_pemeriksaan_odontogram);

    echo json_encode(array('status' => TRUE));
  }

  function filter_tanggal_3()
  {
    $id_user = $this->session->userdata('id_user');
    $cabang = $this->Data_pasien_model->get_cabang();
    $dokter = $this->Data_pasien_model->get_dokter();
    $tgl = $_GET['tgl'];
    if ($tgl == 0) {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('f.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    } else {
      $stt = '1';
      $this->db->select('*');
      $this->db->from('booking a');
      $this->db->join('rencana b', 'a.id_booking=b.id_booking');
      $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
      $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
      $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
      $this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
      // $this->db->where('a.id_user', $id_user);
      $this->db->where('b.tanggal_rencana', $tgl);
      $this->db->where('f.status', $stt);
      $this->db->order_by('b.tanggal_rencana', 'asc');
      $this->db->order_by('b.jam_rencana', 'asc');
      $data = $this->db->get('')->result();
    }
    if (!empty($data)) {
      foreach ($data as $result) : ?>
        <?php if ($result->konfirmasi == '1' && $result->status == '1') { ?>
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
                  <p><?php echo $result->jam_rencana  ?></p>
                </font>
              </div>
              <div class="body">
                <p><b><?php echo $result->nama_depan  ?> <?php echo $result->nama_belakang  ?> - <?php echo $result->hubungan  ?></b></p>
                <p>Pemeriksaan dengan <?php echo $result->nama_dokter  ?> di <?php echo $result->nama_cabang  ?></p>
                <div class="form-group">
                  <font style="background-color: yellow; color: black; padding: 5px" size="2px">
                    Sedang Pemeriksaan</font>
                </div>
              </div>
            </div>
          </div>
        <?php } ?>
      <?php endforeach;
    } else {
      ?>
      <font style="text-align: center;">
        <h4>Tidak Ada Data</h4>
      </font>
<?php
    }
  }
}
