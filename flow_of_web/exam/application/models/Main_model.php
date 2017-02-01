<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_model extends CI_Model {

	public function get_actor()
    {
        $query = $this->db->get('actor');
        // $query = $this->db->get_where('actor', array('num' => '1'));
        return $query->result();
    }

    public function get_jung()
    {
        // $query = $this->db->get('actor');
        $query = $this->db->get_where('actor', array('num' => '1'));
        return $query->result();
    }
}
