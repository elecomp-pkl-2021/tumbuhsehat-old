<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Data_pasien_model extends CI_Model
{

    public $table = 'pasien';
    public $id = 'id_pasien';
    public $order = 'DESC';

    function __construct()
    {
        parent::__construct();
    }

    function get_pasien($id_user)
    {
        return $this->db->get_where('pasien', array('id_user' => $id_user));
    }

    function get_user($id)
    {
        $this->db->select('*');
        $this->db->from('login_session');
        $this->db->where('id_user', $id);
        $this->db->group_by('id_user');
        return $this->db->get();
    }

    function get_pasien_id($id_booking)
    {
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('pasien b', 'a.id_pasien=b.id_pasien', 'left outer');
        $this->db->where('a.id_booking', $id_booking);
        return $this->db->get();
    }

    function get_medis_id($id_rekam_medis)
    {
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rekam_medis b', 'a.id_booking=b.id_booking', 'left outer');
        $this->db->where('b.id_rekam_medis', $id_rekam_medis);
        return $this->db->get();
        // return $this->db->get_where('pasien', array('id_pasien' => $id));
    }

    function get_medis_pasien($id_rekam_medis, $id_pasien)
    {
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('pasien b', 'a.id_pasien=b.id_pasien');
        $this->db->join('rekam_medis c', 'a.id_booking=c.id_booking', 'a.id_booking=c.id_booking');
        $this->db->join('rencana d', 'a.id_booking=d.id_booking');
        $this->db->where('c.id_rekam_medis', $id_rekam_medis);
        $this->db->where('a.id_pasien', $id_pasien);
        return $this->db->get();
        // return $this->db->get_where('pasien', array('id_pasien' => $id));
    }

    function get_cabang()
    {
        return $this->db->get('cabang');
    }

    function get_layanan()
    {
        return $this->db->get('layanan');
    }

    function get_bayar()
    {
        return $this->db->get('metode_pembayaran');
    }

    function get_cabang_dokter($id)
    {
        return $this->db->get_where('cabang', array('id_dokter' => $id));
    }

    function get_kuota($id_dokter, $hari)
    {
        return $this->db->get_where('jadwal_dokter', array('id_dokter' => $id_dokter) and array('hari' => $hari));
    }
    function get_cabang2($id_dokter)
    {
        $this->db->select('b.id_cabang,c.nama_cabang');
        $this->db->from('dokter a');
        $this->db->join('cabang_dokter b', 'a.id_dokter=b.id_dokter', 'left outer');
        $this->db->join('cabang c', 'b.id_cabang=c.id_cabang', 'left outer');
        $this->db->where('b.id_dokter', $id_dokter);
        return $this->db->get();
    }

    function get_id_last()
    {
        $this->db->select($this->id);
        $this->db->order_by($this->id, $this->order);
        $this->db->limit(1, 0);
        return $this->db->get($this->table)->row();
    }

    function get_dokter_id($id)
    {
        $this->db->select('*');
        $this->db->from(' jadwal_dokter a');
        $this->db->join('booking b', 'a.id_dokter=b.id_dokter');
        $this->db->where('b.id_booking', $id);
        $query = $this->db->get();
        return $query;
    }

    function get_dokter_id3($id, $day)
    {
        $this->db->select('*');
        $this->db->from('jadwal_dokter a');
        $this->db->join('booking b', 'a.id_dokter=b.id_dokter');
        $this->db->where('b.id_booking', $id);
        $this->db->where('a.hari', $day);
        $query = $this->db->get();
        return $query;
    }

    function get_dokter_id2($id)
    {
        $this->db->select('*');
        $this->db->from('booking b', 'cabang c', 'dokter d');
        $this->db->join('dokter d', 'd.id_dokter=b.id_dokter');
        $this->db->join('cabang c', 'c.id_cabang=b.id_cabang');
        $this->db->where('b.id_booking', $id);
        $query = $this->db->get();
        return $query;
    }
    //Model untuk mendapatkan jam praktek dokter sesuai hari dan id_dokter
    function get_jam_praktek($hari, $id_dokter)
    {
        $this->db->select('*');
        $this->db->from('jadwal_dokter');
        $this->db->where('id_dokter', $id_dokter);
        $this->db->where('hari', $hari);
        $query = $this->db->get();
        return $query;
    }
    function get_dokter_filter()
    {
        $this->db->select('*');
        $this->db->from('dokter');
        $query = $this->db->get();
        return $query;
    }

    public function cariOrang()
    {
        $cari = $this->input->GET('cari', TRUE);
        $c_spesialisasi = $this->input->GET('c_spesialisasi', TRUE);
        $c_cabang = $this->input->GET('c_cabang', TRUE);
        $c_hari = $this->input->GET('c_hari', TRUE);
        $c_jam = $this->input->GET('c_jam', TRUE);

        if ($c_spesialisasi == "" and $c_cabang == "" and $c_hari == "" and $c_spesialisasi == "" and $c_jam == "") {
            $data = $this->db->query("SELECT * from dokter where nama_dokter like '%$cari%'");
        } else {
            $data = $this->db->query("SELECT * FROM dokter a JOIN jadwal_dokter b on a.id_dokter = b.id_dokter JOIN cabang_dokter c ON a.id_dokter = c.id_dokter JOIN cabang d ON c.id_cabang = d.id_cabang WHERE a.nama_dokter LIKE '%$cari%' AND a.spesialis = '$c_spesialisasi' AND b.hari = '$c_hari' AND b.jam_mulai = '$c_jam' AND d.id_cabang ='$c_cabang'");
        }

        return $data->result();
    }

    function get_jadwal()
    {
        return $this->db->get('jadwal_dokter');
    }
    function get_jadwal_dokter($id_dokter)
    {
        return $this->db->get_where('jadwal_dokter', array('id_dokter' => $id_dokter));
    }

    function get_dokter()
    {
        return $this->db->get('dokter');
    }

    function get_booking($id)
    {

        $this->db->where('id_booking', $id);
        return $this->db->get('booking');
    }

    function ajax_get_pasien($id)
    {
        $this->db->where('id_pasien', $id);
        return $this->db->get('pasien')->row();
    }

    function ajax_get_cabang($id)
    {
        $this->db->where('id_cabang', $id);
        return $this->db->get('cabang')->row();
    }

    function ajax_get_dokter($id)
    {
        $this->db->where('id_dokter', $id);
        return $this->db->get('dokter')->row();
    }

    function get_rencana_sebelum($id)
    {
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->where('a.id_user', $id);
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        $query = $this->db->get();
        return $query;
    }

    function tampil()
    {
        $this->db->select('ID_pasien');
        $this->db->select('Nama');
        $this->db->select('Alamat');
        echo json_encode($this->db->get($this->table)->result());
    }

    function tampil_laporan_pasien()
    {
        $this->db->select('ID_pasien');
        $this->db->select('Nama');
        $this->db->select('Alamat');
        $this->db->select('Tanggal_lahir');
        $this->db->select('No_hp');
        $this->db->order_by('Nama', 'asc');
        echo json_encode($this->db->get($this->table)->result());
    }

    function tampil_laporan_pasien_detail($id)
    {
        $this->db->where('login_session.id_user', $id);
        $this->db->join('rekam_medis', 'login_session.id_user=rekam_medis.id_user');
        echo json_encode($this->db->get($this->table)->result());
    }

    function tampil_laporan_pasien_awal($awal, $id_pasien)
    {
        $this->db->where('tanggal >=', $awal);
        $this->db->where('ID_pasien', $id_pasien);
        //$this->db->join('rekam_medis', 'data_pasien.ID_pasien=rekam_medis.ID_pasien');
        echo json_encode($this->db->get('rekam_medis')->result());
    }

    function tampil_laporan_pasien_akhir($akhir, $id_pasien)
    {
        $this->db->where('tanggal <=', $akhir);
        $this->db->where('ID_pasien', $id_pasien);
        //$this->db->join('rekam_medis', 'data_pasien.ID_pasien=rekam_medis.ID_pasien');
        echo json_encode($this->db->get('rekam_medis')->result());
    }

    function tampil_laporan_pasien_filter($awal, $akhir, $id_pasien)
    {
        if ($akhir == 0) $akhir = date('Y-m-d', strtotime('+0 days', strtotime(date('Y-m'))));
        $this->db->where("tanggal >= '$awal' AND tanggal <= '$akhir' AND ID_pasien = $id_pasien");
        //$this->db->where('ID_pasien', $id);
        //$this->db->join('rekam_medis', 'data_pasien.ID_pasien=rekam_medis.ID_pasien');
        //echo json_encode($this->db->get('rekam_medis')->result());
        $result = $this->db->get('rekam_medis')->result();
        foreach ($result as $row) {
        }
    }

    // get all
    function get_all()
    {
        $this->db->order_by($this->id, $this->order);
        return $this->db->get($this->table)->result();
    }

    // get data by id
    function get_by_id($id)
    {
        $this->db->where($this->id, $id);
        return $this->db->get($this->table)->row();
    }

    // get total rows
    function total_rows($q = NULL)
    {
        $this->db->like('ID_pasien', $q);
        // $this->db->or_like('foto', $q);
        $this->db->or_like('Nama', $q);
        $this->db->or_like('Alamat', $q);
        $this->db->or_like('Tanggal_lahir', $q);
        $this->db->or_like('No_hp', $q);
        $this->db->or_like('keluhan_utama', $q);
        $this->db->or_like('riwayat_penyakit', $q);
        $this->db->or_like('riwayat_alergi_obat', $q);
        $this->db->or_like('riwayat_pengobatan_sebelumnya', $q);
        $this->db->from($this->table);
        return $this->db->count_all_results();
    }

    // get data with limit and search
    function get_limit_data($limit, $start = 0, $q = NULL)
    {
        $this->db->order_by($this->id, $this->order);
        $this->db->like('ID_pasien', $q);
        // $this->db->or_like('foto', $q);
        $this->db->or_like('Nama', $q);
        $this->db->or_like('Alamat', $q);
        $this->db->or_like('Tanggal_lahir', $q);
        $this->db->or_like('No_hp', $q);
        $this->db->or_like('keluhan_utama', $q);
        $this->db->or_like('riwayat_penyakit', $q);
        $this->db->or_like('riwayat_alergi_obat', $q);
        $this->db->or_like('riwayat_pengobatan_sebelumnya', $q);
        $this->db->limit($limit, $start);
        return $this->db->get($this->table)->result();
    }

    // insert data
    function insert($data)
    {
        $query = $this->db->insert("pasien", $data);

        if ($query) {
            return true;
        } else {
            return false;
        }
    }

    // update data
    function update($id, $data)
    {
        $this->db->where($this->id, $id);
        $this->db->update($this->table, $data);
    }

    // delete data
    function delete($id)
    {
        $this->db->where($this->id, $id);
        $this->db->delete($this->table);
    }

    function insert_pasien($data)
    {
        $query = $this->db->insert("pasien", $data);

        if ($query) {
            return true;
        } else {
            return false;
        }
    }
    //  b.status = 0 AND b.konfirmasi = 0 AND
    function jmlh_booking($id_dokter, $tgl_rencana, $jam_mulai, $jam_selesai)
    {
        $sql = $this->db->query("
        SELECT IFNULL(COUNT(b.id_booking),0) AS jml_booking
        FROM rencana r
        JOIN booking b ON r.id_booking = b.id_booking
        WHERE b.id_dokter = $id_dokter 
        AND r.tanggal_rencana = '$tgl_rencana' AND r.jam_rencana_mulai = '$jam_mulai' AND r.jam_rencana_selesai = '$jam_selesai'
        GROUP BY r.jam_rencana_mulai, r.jam_rencana_selesai");

        if ($sql->row() == NULL) {
            return 0;
        } else {
            return $sql->row()->jml_booking;
        }
    }

    public function get_by_id_ubah($id) {
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
        $this->db->where('a.id_booking', $id);
		$query = $this->db->get();
		return $query->row();
	}

    function get_by_id_ubah_terlambat($id){
        $status = '0';
		$konf = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('curdate() > b.tanggal_rencana');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status);
		$this->db->where('a.konfirmasi', $konf);
        $this->db->where('a.id_booking', $id);
		$this->db->group_by('a.id_booking');
		$query = $this->db->get();
		return $query->row();
    }

    public function get_by_id_janji_akan_datang($id_booking){
		$stt0 = '0';
		$stt1 = '1';
		$konf = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
		$this->db->group_start();
		//$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt0);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
		//$this->db->where('b.tanggal_rencana = CURDATE()');
		$this->db->where('a.id_booking', $id_booking);
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

    public function get_by_id_janji_akan_datang_2($id_booking){
        $stt = '0';
        $stt1 = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
		$this->db->where('a.status', $stt);
        $this->db->or_where('a.status', $stt1);
        $this->db->where('a.id_booking', $id_booking);
		$this->db->order_by('b.tanggal_rencana', 'asc');
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
    }

    function kuota_booking($id_dokter, $day)
    {
        $sql = $this->db->query("
        SELECT
        kuota
        FROM jadwal_dokter
        WHERE id_dokter = $id_dokter 
        AND hari = '$day' ");

        if ($sql->row() == NULL) {
            return 0;
        } else {
            return $sql->row()->kuota;
        }
    }
    
    public function add_svg($data) {
		$this->db->insert('temp', $data);
		return $this->db->insert_id();
    }
    
     public function get_by_id_svg($id, $idpemeriksaan, $session_id) {
		$this->db->from('temp');
        $this->db->where('idSvg',$id);
        $this->db->where('idPemeriksaan',$idpemeriksaan);
        $this->db->where('session_id',$session_id);
		$query = $this->db->get();
		return $query->num_rows();
	}

    public function get_id($tabel,$id)
	{
		$this->db->select($id)
				 ->order_by($id,'DESC')
				 ->limit(1);
		return $this->db->get($tabel);
	}

    public function showCity(){
        $curl = curl_init();
        curl_setopt_array($curl,array(
            CURLOPT_URL => "http://api.rajaongkir.com/starter/city",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "key: 8b273fb86a0e6550ac4b20b1104cfa48"),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            $result = 'error';
            return 'error';
        }else {
            return $response;
        }
    }

    public function showProvince(){
        $curl = curl_init();
        curl_setopt_array($curl,array(
            CURLOPT_URL => "http://api.rajaongkir.com/starter/province",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "key: 8b273fb86a0e6550ac4b20b1104cfa48"),
        ));
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            $result = 'error';
            return 'error';
        }else {
            return $response;
        }
    }
    public function showCity2($province){
        $curl = curl_init();
        curl_setopt_array($curl,array(
            CURLOPT_URL => "http://api.rajaongkir.com/starter/city?province=$province",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "key: 8b273fb86a0e6550ac4b20b1104cfa48"),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            $result = 'error';
            return 'error';
        }else {
            return $response;
        }
    }

    public function showKodePos($kota){
        $curl = curl_init();
        curl_setopt_array($curl,array(
            CURLOPT_URL => "http://api.rajaongkir.com/starter/city?id=$kota",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "key: 8b273fb86a0e6550ac4b20b1104cfa48"),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            $result = 'error';
            return 'error';
        }else {
            return $response;
        }
    }

    public function get_summary_rekam_medis($id_pasien=null, $dokter=null, $tgl=null){
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b','a.id_booking=b.id_booking');
        $this->db->join('pasien c','a.id_pasien=c.id_pasien');
        $this->db->join('rekam_medis d','a.id_booking=d.id_booking');
        $this->db->join('pemeriksaan_penunjang e','a.id_booking=e.id_booking');
        $this->db->join('pemeriksaan_klinis_umum f','a.id_booking=f.id_booking');
        $this->db->join('pemeriksaan_klinis_khusus g','a.id_booking=g.id_booking');
        $this->db->join('dokter h','a.id_dokter=h.id_dokter');
        $this->db->join('pilih_layanan i','d.id_rekam_medis=i.id_rekam_medis');
        $this->db->join('layanan j','i.id_layanan=j.id_layanan');
        $this->db->where('a.id_pasien', $id_pasien);
        $this->db->where('d.id_pasien', $id_pasien);
        $this->db->where('e.id_pasien', $id_pasien);
        $this->db->where('f.id_pasien', $id_pasien);
        $this->db->where('g.id_pasien', $id_pasien);
        $this->db->where('i.id_pasien', $id_pasien);
        $this->db->where('a.konfirmasi', 1);

        if($dokter !=""){
            $this->db->where('a.id_dokter', $dokter);
        }

        if($tgl !=""){
            $this->db->where('d.tanggal_periksa', $tgl);
        }
        return $this->db->get();
    }
}
