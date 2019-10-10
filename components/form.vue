<template>
  <div>
       <form class="bait" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
       
       <form action="" method="post" data-netlify="true">
            <h1>Hey there! Register here</h1>
           <div class="form-group">

             <label>First Name</label>
             <input type="text" class="" name="firstName">
           </div>
           <div class="form-group">
              <label>Last Name</label>
             <input type="text" class="" name="lastName">
           </div>
           <div class="form-group">
              <label>Email</label>
             <input type="email" class="" name="email">
           </div>
           <div class="form-group">
             <button type="submit"> send</button>
           </div>
       </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style >

.bait {
  display: none;
}
label {
  margin-right: 15px;
}
  .form-group{
    display: flex;
    margin: 10px 5px; 
  }
</style>