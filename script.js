const posts= [
    {
    title:"First",
    date: "27 May, 2025",
    link: "writings/first.html"
    }
];

const container=document.getElementById('posts');

posts.forEach(post=>{
    const div = document.createElement('Id')
    div.className = 'post';
    div.innerHTML = `
      <h2><a href="${post.link}">${post.title}</a></h2>
      <p><em>${post.date}</em></p>
      <p>${post.excerpt}</p>
    `;
    container.appendChild(div);
});