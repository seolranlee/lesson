<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index()
	{

		$this->load->model('Main_model');

        $data['result'] = $this->Main_model->get_jung();

		$this->load->view('main',$data);
	}
}
