function status(request, response){
  response.status(200).json({ chave: "Everything is fine" });
}

export default status;