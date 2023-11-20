// routes/users.js
import express from 'express';
import Usersmodel from '../models/users.model.js';
const router = express.Router();

// 회원가입 API
router.post('/signup', async (req, res) => {
  const { email, nickname, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({
      errorMessage: '패스워드가 패스워드 확인란과 다릅니다.',
    });
    return;
  }

  // email 또는 nickname이 동일한 데이터가 있는지 확인하기 위해 가져온다.
  const existsUsers = await Usersmodel.findOne({
    $or: [email],
  });
  if (existsUsers) {
    // NOTE: 보안을 위해 인증 메세지는 자세히 설명하지 않습니다.
    res.status(400).json({
      errorMessage: '이 이메일은 이미 사용중입니다.',
    });
    return;
  }

  const user = new Usersmodel({ email, nickname, password });
  await user.save();

  res.status(201).json({});
});

export const Router = router;
