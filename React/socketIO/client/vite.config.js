import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 클라이언트 요청을 다른 서버로 전달하는 프록시 설정
      '/socket.io': {
        // 프록시 규칙이 적용될 요청 경로를 정의
        target: 'http://localhost:3000',
        // 클라이언트에서 오는 요청이 프록시를 통해 전달될 서버의 주소
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
