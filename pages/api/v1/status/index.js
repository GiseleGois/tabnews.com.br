function status(request, response) {
  response.status(200).json({ chave: "deu baum" });
}

export default status;
