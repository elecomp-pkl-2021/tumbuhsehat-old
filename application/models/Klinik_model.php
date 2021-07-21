<?php
class Klinik_model extends CI_Model
{
	public $table = 'login_session';
	public $id = 'id';


	function __construct()
	{
		parent::__construct();
	}
	//ambil data mahasiswa dari database
	function get_pasien()
	{
		$query = $this->db->get('pasien');
		return $query;
	}
	// function tampil()
	// {
	// 	$level = 'Pasien';
	// 	echo json_encode($this->db->get_where('login_session', ['level' => $level])->result());
	// }
	function tampil($nama=null, $tgl_lahir=null, $no_hp=null, $email=null){
		$level = 'Pasien'; 
		if($nama!=""){
			$this->db->like('nama_depan_u', $nama);
		}

		if($tgl_lahir!=""){
			$this->db->like('tanggal_lahir', $tgl_lahir);
		}

		if($no_hp!=""){
			$this->db->like('no_hp', $no_hp);
		}

		if($email!=""){
			$this->db->like('email', $email);
		}

		$this->db->select('DATE_FORMAT(tanggal_lahir, "%d-%m-%Y") as tanggal');
		$this->db->select('nama_depan_u');
		$this->db->select('no_hp');
		$this->db->select('email');
		$this->db->select('id_user');
		$this->db->where('level', $level);
		return $this->db->get('login_session')->result();
		// $level = 'Pasien';
		// echo json_encode($this->db->get_where('login_session', ['level' => $level])->result());
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
	function insert_login($data)
	{
		$query = $this->db->insert("login_session", $data);

		if ($query) {
			return true;
		} else {
			return false;
		}
	}

	function insert_verifikasi($data)
	{
		$query = $this->db->insert("temp_verifikasi", $data);

		if ($query) {
			return true;
		} else {
			return false;
		}
	}

	function changeActiveState($key)
	{
		$this->load->database();
		$data = array(
			'active' => 1
		);

		$this->db->where('md5(id_user)', $key);
		$this->db->update('mytable', $data);

		return true;
	}

	function get_iduser($nama_d, $tgl, $nama_b)
	{
		$this->db->where('nama_depan_u', $nama_d);
		$this->db->where('tanggal_lahir', $tgl);
		$this->db->where('nama_belakang_u', $nama_b);
		return $this->db->get('login_session')->row();
	}


	function get_id_last()
	{
		$this->db->select('id_user');
		$this->db->order_by('id_user', 'DESC');
		$this->db->limit(1, 0);
		return $this->db->get('login_session')->row();
	}

	function ajax_get_user($id)
	{
		$this->db->where('id_user', $id);
		return $this->db->get('login_session')->row();
	}

	function get_rencana_sebelum()
	{
		$st = '3';
		$st2 = '4';
		$this->db->select('a.tanggal_rencana');
		$this->db->distinct('a.tanggal_rencana');
		$this->db->from('rencana a');
		$this->db->join('booking b', 'a.id_booking=b.id_booking');
		$this->db->where_not_in('b.status', $st);
		$this->db->where_not_in('b.status', $st2);
		$this->db->order_by('a.tanggal_rencana', 'asc');
		$query = $this->db->get();
		return $query;
	}
	function get_booking()
	{
		$konf = '0';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', 'a.id_dokter=f.id_dokter');
		// $this->db->where('curdate() <= b.tanggal_rencana');
		$this->db->where('a.konfirmasi', $konf);
		$this->db->group_by('a.id_booking');
		return $this->db->get();
	}

	public function get_konfirmasi_janji($nama, $tgl_lahir, $rekam_medis, $id_dokter, $tanggal_rencana, $jam_rencana_mulai){
		$konf = '0';

		//

		if($nama!='0'){
			$this->db->like('c.nama_depan', $nama);
		}

		if($tgl_lahir!='0'){
			$this->db->like('c.tanggal_lahir', $tgl_lahir);
		}

		if($rekam_medis!='0'){
			$this->db->like('a.id_booking', $rekam_medis);
		}

		if($id_dokter!='0'){
			$this->db->like('d.nama_dokter', $id_dokter);
		}

		if($tanggal_rencana!='0'){
			$this->db->like('b.tanggal_rencana', $tanggal_rencana);
		}

		if($jam_rencana_mulai!='0'){
			$this->db->like('b.jam_rencana_mulai', $jam_rencana_mulai);
		}

		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', 'a.id_dokter=f.id_dokter');
		// $this->db->where('curdate() <= b.tanggal_rencana');
		$this->db->where('a.konfirmasi', $konf);
		$this->db->group_by('a.id_booking');
		return $this->db->get();
	}

	public function ajax_get_terima($id_pasien){
		$konf = '0';
		$this->db->select('c.nama_depan, 
						  c.nama_belakang,
						  d.nama_dokter,
						  e.nama_cabang,
						  DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tgl,
						  b.jam_rencana_mulai,
						  b.jam_rencana_selesai,
						  b.id_booking,
						  a.id_pasien,
						  a.id_dokter');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', 'a.id_dokter=f.id_dokter');
		// $this->db->where('curdate() <= b.tanggal_rencana');
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.id_pasien', $id_pasien);
		$this->db->group_by('a.id_booking');
		$query = $this->db->get();
		return $query->row();
	}

	public function ajax_get_daftar($id_booking){
		$status = '0';
		$konf = '1';
		$this->db->select('c.nama_depan,
						   c.nama_belakang, 
						   DATE_FORMAT(c.tanggal_lahir, "%d-%m-%Y") as tanggal_lahir, 
						   e.id_rekam_medis, 
						   d.nama_dokter, 
						   g.nama_cabang,
						   DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tanggal_rencana, 
						   b.jam_rencana_mulai, 
						   b.jam_rencana_selesai,
						   a.id_pasien,
						   a.id_booking,
						   a.id_dokter');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status);
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.id_booking', $id_booking);
		$query = $this->db->get();
		return $query->row();
	}

	public function get_all(){
		$this->db->order_by('id_dokter', 'DESC');
		return $this->db->get('dokter');
	} 

	public function get_limited2($offset,$limit){
       
        $this->db->limit($limit, $offset);
        $query = $this->db->get('dokter');
        return $query->result();
    }

	function get_terlambat_janji()
	{
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
		$this->db->group_by('a.id_booking');
		return $this->db->get();
	}

	function get_register_ubah_terlambat()
	{
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
		$this->db->group_by('a.id_booking');
		return $this->db->get();
	}

	function get_terlambat_booking()
	{
		$konf = '0';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', 'a.id_dokter=f.id_dokter');
		$this->db->where('curdate() > b.tanggal_rencana');
		$this->db->where('a.konfirmasi', $konf);
		$this->db->group_by('a.id_booking');
		return $this->db->get();
	}

	public function add_rekam_medis($data)
	{

		$query = $this->db->insert("rekam_medis", $data);

		if ($query) {
			return true;
		} else {
			return false;
		}
	}

	function update_booking($id, $data)
	{
		$this->db->where("id_booking", $id);
		$this->db->update("booking", $data);
	}

	function update_pilih_layanan($id, $data)
	{
		$this->db->where("id_rekam_medis", $id);
		$this->db->update("pilih_layanan", $data);
	}


	function get_data_janji()
	{
		$status = '0';
		$konf = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status);
		$this->db->where('a.konfirmasi', $konf);
		return $this->db->get();
	}

	public function get_register_janji($nama, $tgl_lahir, $rekam_medis, $id_dokter, $tanggal_rencana, $jam_rencana_mulai, $kode_booking){
		$status = '0';
		$konf = '1';
    //    echo 
		if($nama!='0'){
			$this->db->like('c.nama_depan', $nama);
		}

		if($tgl_lahir!='0'){
			$this->db->like('c.tanggal_lahir', $tgl_lahir);
		}

		if($rekam_medis!='0'){
			$this->db->like('e.id_rekam_medis', $rekam_medis);
		}

		if($id_dokter!='0'){
			$this->db->like('d.nama_dokter', $id_dokter);
		}

		if($tanggal_rencana!='0'){
			$this->db->like('b.tanggal_rencana', $tanggal_rencana);
		}

		if($jam_rencana_mulai!='0'){
			$this->db->like('b.jam_rencana_mulai', $jam_rencana_mulai);
		}
		$this->db->select('c.nama_depan, c.nama_belakang, DATE_FORMAT(c.tanggal_lahir, "%d-%m-%Y") as tanggal_lahir, e.id_rekam_medis, d.nama_dokter, DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tanggal_rencana, b.jam_rencana_mulai, b.jam_rencana_selesai,a.id_pasien');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status);
		$this->db->where('a.konfirmasi', $konf);

		if($kode_booking!='0'){
			$this->db->where('a.id_booking', $kode_booking);
		}

		
		return $this->db->get();
	}

    function get_register_janji2(){
        $status = '0';
		$konf = '1';
        $this->db->select('c.nama_depan, c.nama_belakang, DATE_FORMAT(c.tanggal_lahir, "%d-%m-%Y") as tanggal_lahir, e.id_rekam_medis, d.nama_dokter, DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tanggal_rencana, b.jam_rencana_mulai, b.jam_rencana_selesai,a.id_pasien, b.id_booking');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status);
		$this->db->where('a.konfirmasi', $konf);

        return $this->db->get();
    }

	function update_rekam_medis($id, $data)
	{
		$this->db->where("id_booking", $id);
		$this->db->update("rekam_medis", $data);
	}

	function update_stat_book($id, $data)
	{
		$this->db->where("id_booking", $id);
		$this->db->update("booking", $data);
	}

	public function delete_r($id)
	{
		$this->db->where('id_booking', $id);
		return $this->db->delete('rekam_medis');
	}

	public function add_antrian($data)
	{
		$query = $this->db->insert("antrian", $data);
		if ($query) {
			return true;
		} else {
			return false;
		}
	}

	function update_rencana($id, $data)
	{
		$this->db->where("id_rcn", $id);
		$this->db->update("rencana", $data);
	}

	function update_rencana_bayar($id, $data)
	{
		$this->db->where("id_booking", $id);
		$this->db->update("rencana", $data);
	}

	function get_data_bayar()
	{
		$status = '2';
		$status_b = '2';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		// $this->db->join('metode_pembayaran f','b.id_metode=f.id_metode');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status_b);
		return $this->db->get();
	}

	function get_data_pembayaran(){
		$status = '2';
		$status_b = '2';
		$this->db->select('c.nama_depan, c.nama_belakang, DATE_FORMAT(c.tanggal_lahir, "%d-%m-%Y") as tanggal_lahir, e.id_rekam_medis, d.nama_dokter, DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tanggal_rencana,b.jam_rencana_mulai, b.jam_rencana_selesai, a.id_booking');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status_b);
		return $this->db->get();
	}

	public function get_data_pembayaran2($nama, $tgl_lahir, $rekam_medis, $id_dokter, $tanggal_rencana, $jam_rencana_mulai, $kode_booking){
		$status = '2';
		$status_b = '2';
    //    echo 
		if($nama!='0'){
			$this->db->like('c.nama_depan', $nama);
		}

		if($tgl_lahir!='0'){
			$this->db->like('c.tanggal_lahir', $tgl_lahir);
		}

		if($rekam_medis!='0'){
			$this->db->like('e.id_rekam_medis', $rekam_medis);
		}

		if($id_dokter!='0'){
			$this->db->like('d.nama_dokter', $id_dokter);
		}

		if($tanggal_rencana!='0'){
			$this->db->like('b.tanggal_rencana', $tanggal_rencana);
		}

		if($jam_rencana_mulai!='0'){
			$this->db->like('b.jam_rencana_mulai', $jam_rencana_mulai);
		}
		$this->db->select('c.nama_depan, c.nama_belakang, DATE_FORMAT(c.tanggal_lahir, "%d-%m-%Y") as tanggal_lahir, e.id_rekam_medis, d.nama_dokter, DATE_FORMAT(b.tanggal_rencana, "%d-%m-%Y") as tanggal_rencana,b.jam_rencana_mulai, b.jam_rencana_selesai, a.id_booking');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->where('e.status', $status);
		$this->db->where('a.status', $status_b);

		if($kode_booking!='0'){
			$this->db->where('a.id_booking', $kode_booking);
		}

		
		return $this->db->get();
	}

	public function edit_pembayaran($id_booking)
	{

		$query = $this->db->where("id_booking", $id_booking)
			->get("rencana");
		$query2 = $this->db->where("id_booking", $id_booking)
			->get("rekam_medis");

		if ($query && $query2) {
			return $query->row();
			return $query2->row();
		} else {
			return false;
		}
	}

	public function edit_pasien($id_user)
	{

		$query = $this->db->where("id_user", $id_user)
			->get("pasien");

		if ($query) {
			return $query->row();
		} else {
			return false;
		}
	}

	function get_proses_bayar($id_booking)
	{
		$status = '2';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang g', 'a.id_cabang=g.id_cabang');
		$this->db->join('rekam_medis e', 'a.id_booking=e.id_booking');
		$this->db->join('metode_pembayaran f', 'b.id_metode=f.id_metode');
		$this->db->where('a.id_booking', $id_booking);
		$this->db->where('e.status', $status);
		return $this->db->get();
	}

	function get_data_user($id_user)
	{
		$this->db->select('*');
		$this->db->from('login_session');
		$this->db->where('id_user', $id_user);
		return $this->db->get();
	}

	function get_layanan($id_booking)
	{
		$status = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rekam_medis b', 'a.id_booking=b.id_booking');
		$this->db->join('pilih_layanan c', 'b.id_rekam_medis=c.id_rekam_medis');
		$this->db->join('layanan d', 'c.id_layanan=d.id_layanan');
		$this->db->where('a.id_booking', $id_booking);
		return $this->db->get();
	}

	function get_total($id_rekam_medis){
		$this->db->where('id_rekam_medis',$id_rekam_medis);
		return $this->db->get('rekam_medis')->row();
	}

	function get_diskon()
	{
		$status = '1';
		$this->db->order_by('id_diskon', 'DESC');
		return $this->db->get_where('diskon', ['status_diskon' => $status])->result_array();
	}

	function get_laporan()
	{
		$stat1 = '3';
		$stat2 = '3';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('rekam_medis f', 'a.id_booking=f.id_booking');
		$this->db->join('login_session g', 'a.id_user=g.id_user');
		$this->db->where('a.status', $stat1);
		$this->db->where('f.status', $stat2);
		return $this->db->get();
	}

	function get_feedokter()
	{
		$sql = $this->db->query('SELECT d.nama_dokter, b.id_dokter, rm.tanggal_periksa, SUM(rm.grandtotal) AS total_pendapatan, 
		SUM(
			CASE 
				WHEN rm.grandtotal = 0 THEN 0
				ELSE FLOOR(((rm.grandtotal * d.sharingfee_pers) / 100))
			END
		) AS total_pendapatan_fee
		FROM rekam_medis rm
		JOIN booking b ON rm.id_booking = b.id_booking
		JOIN dokter d ON b.id_dokter = d.id_dokter
		GROUP BY b.id_dokter');
		return $sql->result();
	}

	function get_harian($id_dokter, $endDate, $interval)
	{
		$clausa_dokter = '';
		if ($id_dokter != '') {
			$clausa_dokter = 'AND (b.id_dokter=' . $id_dokter . ' OR ' . $id_dokter . ' =0)';
		}
		$sql = "SELECT
		tgl,IFNULL(SUM(u.grandtotal),0)AS money,nama_dokter,spesialis,DAYNAME(tgl) as hari,tanggal_periksa
	FROM
		(
		SELECT
			ADDDATE(
				(
				SELECT
					MIN(DATE(? - INTERVAL ? DAY))
				FROM
					rekam_medis
			),
			ROW -1
			) AS tgl
		FROM
			(
			SELECT
				@row := @row + 1 AS ROW
			FROM
				(
				SELECT
					0
				UNION ALL
			SELECT
				1
			UNION ALL
		SELECT
			3
		UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
			) t,
			(
			SELECT
				0
			UNION ALL
		SELECT
			1
		UNION ALL
	SELECT
		3
	UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
		) t2,
		(
	SELECT
		@row := 0
	) r
		) n
	WHERE
		n.row <=(
		SELECT
			DATEDIFF(
				MAX(DATE(?)),
				MIN(DATE(? - INTERVAL ? DAY))
			)
		FROM
			rekam_medis
	) + 1
	) dr
	LEFT JOIN 
	(rekam_medis u INNER JOIN rencana r ON u.id_booking=r.id_booking
	 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3 " . $clausa_dokter . ")
	 ON
		dr.tgl = DATE(u.tanggal_periksa)
	GROUP BY
		dr.tgl";
		return $this->db->query($sql, array($endDate, $interval, $endDate, $endDate, $interval));
	}

	function get_dokter_filter()
	{
		$this->db->select('*');
		$this->db->from('dokter');
		$query = $this->db->get();
		return $query;
	}

	function get_perdokter()
	{
		return $this->db->query("select nama_dokter, spesialis, 
		tanggal_periksa,SUM(rekam_medis.grandtotal) 
		AS money FROM rencana join rekam_medis on 
		rencana.id_booking= rekam_medis.id_booking JOIN booking on 
		booking.id_booking=rencana.id_booking join dokter on 
		dokter.id_dokter = booking.id_dokter where rekam_medis.status = 3  GROUP by booking.id_dokter");
	}
	function get_laporan_pendapatan_m()
	{
		return $this->db->query('SELECT
		tgl as startDate,IFNULL(SUM(u.grandtotal),0)AS money,DAYNAME(tgl) as hari,(tgl+INTERVAL 6 DAY) as endDate,DAYNAME(tgl+INTERVAL 6 DAY) as hari2
	FROM
		(
		SELECT
			ADDDATE(
				(
				SELECT
					MIN(CURDATE() - INTERVAL 8 WEEK)
				FROM
					rekam_medis
			),
			ROW -1
			) AS tgl
		FROM
			(
			SELECT
				@row := @row + 1 AS ROW
			FROM
				(
				SELECT
					0
				UNION ALL
			SELECT
				1
			UNION ALL
		SELECT
			3
		UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
			) t,
			(
			SELECT
				0
			UNION ALL
		SELECT
			1
		UNION ALL
	SELECT
		3
	UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
		) t2,
		(
	SELECT
		@row := 0
	) r
		) n
	WHERE
		n.row <=(
		SELECT
			DATEDIFF(
				MAX(CURDATE()),
				MIN(CURDATE() - INTERVAL 8 WEEK)
			)
		FROM
			rekam_medis
	) + 1
	) dr
	LEFT JOIN 
	(rekam_medis u INNER JOIN rencana r ON u.id_booking=r.id_booking
	 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3 )
	 ON
		dr.tgl = DATE(u.tanggal_periksa)
	GROUP BY
		YEARWEEK(dr.tgl)
ORDER BY tgl ASC LIMIT 8 OFFSET 1');
	}
	//Untuk filter laporan mingguan
	function filter_laporan_pendapatan_m($id_dokter, $endDate, $interval)
	{
		$sql = "SELECT
		tgl as startDate,IFNULL(SUM(u.grandtotal),0)AS money,DAYNAME(tgl) as hari,(tgl+INTERVAL 6 DAY) as endDate,DAYNAME(tgl+INTERVAL 6 DAY) as hari2
	FROM
		(
		SELECT
			ADDDATE(
				(
				SELECT
					MIN(? - INTERVAL ? DAY)
				FROM
					rekam_medis
			),
			ROW -1
			) AS tgl
		FROM
			(
			SELECT
				@row := @row + 1 AS ROW
			FROM
				(
				SELECT
					0
				UNION ALL
			SELECT
				1
			UNION ALL
		SELECT
			3
		UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
			) t,
			(
			SELECT
				0
			UNION ALL
		SELECT
			1
		UNION ALL
	SELECT
		3
	UNION ALL
	SELECT
		4
	UNION ALL
	SELECT
		5
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		6
	UNION ALL
	SELECT
		7
	UNION ALL
	SELECT
		8
	UNION ALL
	SELECT
		9
		) t2,
		(
	SELECT
		@row := 0
	) r
		) n
	WHERE
		n.row <=(
		SELECT
			DATEDIFF(
				MAX(?),
				MIN(? - INTERVAL ? DAY)
			)
		FROM
			rekam_medis
	) + 1
	) dr
	LEFT JOIN 
	(rekam_medis u INNER JOIN rencana r ON u.id_booking=r.id_booking
	 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3 AND (b.id_dokter=? OR ? =0) )
	 ON
		dr.tgl = DATE(u.tanggal_periksa)
	GROUP BY
		YEARWEEK(dr.tgl)
ORDER BY tgl ASC";
		return $this->db->query($sql, array($endDate, $interval, $endDate, $endDate, $interval, $id_dokter, $id_dokter));
	}
	//Fungsi untuk laporan bulanan
	function get_laporan_pendapatan_b()
	{
		return $this->db->query('SELECT
		t1.month as bulan,
		t1.md,t1.year as year,
		coalesce(SUM(t1.amount+t2.amount), 0) AS money
		from
		(
		  select DATE_FORMAT(a.Date,"%b") as month,
		  DATE_FORMAT(a.Date, "%Y-%m") as md,
		  0 as  amount,YEAR(a.Date) as year
		  from (
			select curdate() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY as Date
			from (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as a
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as b
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as c
		  ) a
		  where a.Date <= NOW() and a.Date >= Date_add(Now(),interval - 12 month)
		  group by md
		)t1
		left join
		(
		  SELECT DATE_FORMAT(tanggal_periksa, "%b") AS month, SUM(grandtotal) as amount ,DATE_FORMAT(tanggal_periksa, "%Y-%m") as md
		  FROM rekam_medis u
			INNER JOIN rencana r ON u.id_booking=r.id_booking
			 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3
		  and tanggal_periksa <= NOW() and tanggal_periksa >= Date_add(Now(),interval - 12 month)
		  GROUP BY md
		)t2
		on t2.md = t1.md 
		group by t1.md
		order by t1.md LIMIT 12 OFFSET 1');
	}
	function filter_laporan_pendapatan_b($id_dokter, $endDate, $interval)
	{
		$sql = "SELECT
		t1.month as bulan,
		t1.md,t1.year as year,
		coalesce(SUM(t1.amount+t2.amount), 0) AS money
		from
		(
		  select DATE_FORMAT(a.Date,'%b') as month,
		  DATE_FORMAT(a.Date, '%Y-%m') as md,
		  0 as  amount,YEAR(a.Date) as year
		  from (
			select ? - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY as Date
			from (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as a
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as b
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as c
		  ) a
		  where a.Date <= ? and a.Date >= Date_add(?,interval - ? DAY)
		  group by md
		)t1
		left join
		(
		  SELECT DATE_FORMAT(tanggal_periksa, '%b') AS month, SUM(grandtotal) as amount ,DATE_FORMAT(tanggal_periksa, '%Y-%m') as md
		  FROM rekam_medis u
			INNER JOIN rencana r ON u.id_booking=r.id_booking
			 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3 AND (b.id_dokter=? OR ? =0)
		  and tanggal_periksa <= ? and tanggal_periksa >= Date_add(?,interval - ? DAY)
		  GROUP BY md
		)t2
		on t2.md = t1.md 
		group by t1.md
		order by t1.md";
		return $this->db->query($sql, array($endDate, $endDate, $endDate, $interval, $id_dokter, $id_dokter, $endDate, $endDate, $interval));
	}
	function get_laporan_pendapatan_t()
	{
		return $this->db->query('SELECT
		t1.year as tahun,
		t1.md,
		coalesce(SUM(t1.amount+t2.amount), 0) AS money
		from
		(
		  select DATE_FORMAT(a.Date,"%Y") as year,
		  DATE_FORMAT(a.Date, "%Y") as md,
		  0 as  amount
		  from (
			select curdate() - INTERVAL (12*(a.a + (10 * b.a) + (100 * c.a))) DAY as Date
			from (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as a
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as b
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as c
		  ) a
		  where a.Date <= NOW() and a.Date >= Date_add(Now(),interval - 12 year)
		  group by md
		)t1
		left join
		(
		  SELECT DATE_FORMAT(tanggal_periksa, "%Y") AS year, SUM(grandtotal) as amount ,DATE_FORMAT(tanggal_periksa, "%Y") as md
		  FROM rekam_medis u
			INNER JOIN rencana r ON u.id_booking=r.id_booking
			 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3
		  and tanggal_periksa <= NOW() and tanggal_periksa >= Date_add(Now(),interval - 12 year)
		  GROUP BY md
		)t2
		on t2.md = t1.md 
		group by t1.md
		order by t1.md LIMIT 12 OFFSET 1');
	}
	function filter_laporan_pendapatan_t($id_dokter, $endDate, $interval)
	{
		$sql = 'SELECT
		t1.year as tahun,
		t1.md,
		coalesce(SUM(t1.amount+t2.amount), 0) AS money
		from
		(
		  select DATE_FORMAT(a.Date,"%Y") as year,
		  DATE_FORMAT(a.Date, "%Y") as md,
		  0 as  amount
		  from (
			select ? - INTERVAL (12*(a.a + (10 * b.a) + (100 * c.a))) DAY as Date
			from (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as a
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as b
			cross join (select 0 as a union all select 1 union all select 2 union all select 3 union all select 4 union all select 5 union all select 6 union all select 7 union all select 8 union all select 9) as c
		  ) a
		  where a.Date <= ? and a.Date >= Date_add(?,interval - ? DAY)
		  group by md
		)t1
		left join
		(
		  SELECT DATE_FORMAT(tanggal_periksa, "%Y") AS year, SUM(grandtotal) as amount ,DATE_FORMAT(tanggal_periksa, "%Y") as md
		  FROM rekam_medis u
			INNER JOIN rencana r ON u.id_booking=r.id_booking
			 INNER JOIN booking b ON b.id_booking=u.id_booking INNER JOIN dokter d ON d.id_dokter=b.id_dokter AND u.status=3 AND b.status=3 AND (b.id_dokter=? OR ? =0)
		  and tanggal_periksa <= ? and tanggal_periksa >= Date_add(?,interval - ? DAY)
		  GROUP BY md
		)t2
		on t2.md = t1.md 
		group by t1.md
		order by t1.md';
		return $this->db->query($sql, array($endDate, $endDate, $endDate, $interval, $id_dokter, $id_dokter, $endDate, $endDate, $interval));
	}

	public function cekkode($where)
	{
		$subquery = $this->db->select('kode_verifikasi')
							 ->from('temp_verifikasi')
							 ->where('kode_verifikasi is not null', NULL, FALSE)
							 ->get_compiled_select();

		return $this->db->where('kode_verifikasi in ('.$subquery.')', NULL, FALSE)
						->where('kode_verifikasi',$where)
						->get('temp_verifikasi');
	}

	public function get_janji_datang(){
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
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt0);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
		$this->db->where('b.tanggal_rencana = CURDATE()');
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang2($tgl){
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
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->group_start();
        $this->db->where('a.konfirmasi', $konf);
        $this->db->where('a.status', $stt0);
        $this->db->or_where('a.status', $stt1);
        $this->db->group_end();
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang3($tgl, $id){
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
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->where('a.id_dokter', $id);
        $this->db->group_start();
        $this->db->where('a.konfirmasi', $konf);
        $this->db->where('a.status', $stt0);
        $this->db->or_where('a.status', $stt1);
        $this->db->group_end();
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang_profil(){
		$stt = '0';
		$stt1 = '1';
		$konf = '1';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
		// $this->db->where('a.status', $stt);
		$this->db->group_start();
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
		$this->db->order_by('b.tanggal_rencana', 'asc');
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang_profil2($id){
		$stt = '0';
		$stt1 = '1';
		$konf = '1';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('a.id_dokter', $id);
        // $this->db->where('a.status', $stt);
		$this->db->group_start();
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
	}

	public function get_janji_datang_profil3($tgl, $id){
		$stt = '0';
		$stt1 = '1';
		$konf = '1';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->where('a.id_dokter', $id);
        // $this->db->where('a.status', $stt);
		$this->db->group_start();
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
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
		$this->db->where('a.konfirmasi', $konf);
		$this->db->where('a.status', $stt0);
		$this->db->or_where('a.status', $stt1);
		$this->db->group_end();
		$this->db->where('b.tanggal_rencana = CURDATE()');
		$this->db->where('a.id_booking', $id_booking);
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang_klinik(){
		$stt = '0';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
		$this->db->where('a.status', $stt);
		$this->db->order_by('b.tanggal_rencana', 'asc');
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang_klinik_2($tgl){
		$stt = '0';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->where('a.status', $stt);
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
	}

	public function get_janji_datang_klinik_3($tgl, $id){
		$stt = '0';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->where('a.id_dokter', $id);
        $this->db->where('a.status', $stt);
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
	}

	public function get_janji_datang_profil_klinik(){
		$stt = '0';
		$this->db->select('*');
		$this->db->from('booking a');
		$this->db->join('rencana b', 'a.id_booking=b.id_booking');
		$this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
		$this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
		$this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
		$this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
		$this->db->where('a.status', $stt);
		$this->db->order_by('b.tanggal_rencana', 'asc');
		$this->db->order_by('b.jam_rencana_mulai', 'asc');
		$this->db->order_by('b.jam_rencana_selesai', 'asc');
		return $this->db->get();
	}

	public function get_janji_datang_profil_klinik_2($id){
		$stt = '0';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('a.id_dokter', $id);
        $this->db->where('a.status', $stt);
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
	}

	public function get_janji_datang_profil_klinik_3($tgl, $id){
		$stt = '0';
        $this->db->select('*');
        $this->db->from('booking a');
        $this->db->join('rencana b', 'a.id_booking=b.id_booking');
        $this->db->join('pasien c', 'a.id_pasien=c.id_pasien');
        $this->db->join('dokter d', ' a.id_dokter=d.id_dokter');
        $this->db->join('cabang e', 'a.id_cabang=e.id_cabang');
        $this->db->join('jadwal_dokter f', ' a.id_dokter=f.id_dokter');
        $this->db->where('b.tanggal_rencana', $tgl);
        $this->db->where('a.id_dokter', $id);
        $this->db->where('a.status', $stt);
        $this->db->order_by('b.tanggal_rencana', 'asc');
        $this->db->order_by('b.jam_rencana_mulai', 'asc');
        $this->db->order_by('b.jam_rencana_selesai', 'asc');
        return $this->db->get();
	}
}