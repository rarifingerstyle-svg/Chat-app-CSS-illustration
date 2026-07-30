    document.addEventListener("DOMContentLoaded", () => {
      // 1. Animasi Stagger pada Chat Bubbles saat Load
      const chatMessages = document.querySelectorAll('.animate-chat');
      chatMessages.forEach((el, index) => {
        el.style.animationDelay = `${(index + 1) * 0.18}s`;
      });

      // 2. Interaksi Pengiriman Pesan Baru
      const form = document.getElementById('chat-form');
      const input = document.getElementById('chat-input');
      const chatBody = document.getElementById('chat-body');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
          const newMsg = document.createElement('div');
          newMsg.className = "bg-white text-chat-right p-2 rounded-lg rounded-br-xs max-w-[68%] self-end shadow-xs leading-normal animate-chat";
          newMsg.style.animationDelay = "0s";
          newMsg.textContent = text;
          
          chatBody.appendChild(newMsg);
          input.value = '';
          chatBody.scrollTop = chatBody.scrollHeight;
        }
      });
    });
  