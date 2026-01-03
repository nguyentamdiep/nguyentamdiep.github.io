import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const CORRECT_PASSWORD = '270301';
const STORAGE_KEY = 'website_password_verified';

export default function PasswordDialog() {
  const navigate = useNavigate();
  const location = useLocation();

  // Kiểm tra localStorage ngay từ đầu để set initial state
  const [open, setOpen] = useState(() => {
    const isVerified = localStorage.getItem(STORAGE_KEY);
    console.log('Initial check - isVerified:', isVerified);
    return !isVerified; // Mở dialog nếu chưa có trong localStorage
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Kiểm tra nếu chưa xác thực và không ở trang chủ thì redirect về trang chủ
  useEffect(() => {
    const isVerified = localStorage.getItem(STORAGE_KEY);
    if (!isVerified && location.pathname !== '/') {
      console.log('Not verified and not on home page, redirecting to home...');
      navigate('/');
    }
  }, [location.pathname, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      // Lưu vào localStorage
      localStorage.setItem(STORAGE_KEY, 'true');
      setOpen(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown
      aria-labelledby="password-dialog-title"
      sx={{ zIndex: 9999 }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Làm tối nền phía sau
            backdropFilter: 'blur(8px)', // Thêm hiệu ứng blur
          },
        },
      }}
    >
      <DialogTitle id="password-dialog-title">Bảo vệ bằng mật khẩu</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Mật khẩu không đúng. Vui lòng thử lại.
            </Alert>
          )}
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Nhập mật khẩu"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            error={error}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained">
            Xác nhận
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
