console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://i.pinimg.com/originals/46/b8/57/46b8570d9e6d28f4779ae89562fd3a92.png'
    });
});