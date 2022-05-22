import { toast } from 'react-toastify';

const showToast = (msg: string) => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { showToast };
