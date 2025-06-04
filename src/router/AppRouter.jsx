import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import PostPage from '../pages/PostPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import CreatePostPage from '../pages/CreatePostPage'

function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PostPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="create" element={<CreatePostPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter