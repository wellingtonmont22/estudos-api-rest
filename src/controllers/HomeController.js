class HomeController {
  index(req, res) {
    return res.status(200).json({
      message: 'rota index ok!',
    });
  }
}

export default new HomeController();
