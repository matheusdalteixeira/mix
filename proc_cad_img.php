<?php
	session_start();
	include_once './conexao.php';
	$SendCadImg = filter_input(INPUT_POST,'sendCadImg' ,FILTER_SANITIZE_STRING);
	if($SendCadImg){
		$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
		$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
		$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
		$assunto = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);
		$nome_imagem = $_FILES['imagem']['name'];
		$result_img = "INSERT INTO imagens (nome, telefone, email, assunto, imagem) VALUES (:nome, :telefone, :email, :assunto, :imagem)";
		$insert_msg = $conn->prepare($result_img);
		$insert_msg->bindParam(':nome', $nome);
		$insert_msg->bindParam(':nome', $telefone);
		$insert_msg->bindParam(':nome', $email);
		$insert_msg->bindParam(':nome', $assunto);
		$insert_msg->bindParam(':imagem', $nome_imagem);
		if($insert_msg->execute()){
			$ultimo_id = $conn->lastInsertId();
			$diretorio ='imagens/'.$ultimo_id.'/';
			mkdir($diretorio, 0755);
			move_uploaded_file($_FILES['imagem']['tmp_name'], $diretorio.$nome_imagem);
			$_SESSION['msg'] = "<p style='color: green;'>Dados salvos com sucesso</p>";
			header('location: index.php');
		}
		else{
			$_SESSION['msg'] = "<p style='color: red;'>Erro ao salvar os dados</p>";
			header('location: index.php');
		}
	}
	else{
		$_SESSION['msg'] = "<p style='color: red;'>Erro ao acessar os dados</p>";
		header('location: index.php');
	}
 ?>