import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }: { children: JSX.Element }) {
  const token = useSelector((s: RootState) => s.auth.token);
  if (!token) return <Navigate to="/signin" replace />;
  return children;
}
