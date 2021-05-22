<template>
  <div class="wrapper">
    <h1 class="wrapper__header">Вход</h1>
    <div class="wrapper__input">
    <input class="enter__user" placeholder="введите имя пользователя">
    <input class="enter__password" placeholder ="введите пароль">
    </div>
    <div class="wrapper__btn">
    <button class="enter">Войти</button>
    <button class="registration">Создать аккаунт</button>
  </div>


  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>
  .wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
    height: 400px;
    background: rgba(207, 176, 159, 0.27);
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    border-radius: 10px;
    border: solid #FFFFFF;
  }
  .wrapper__header{
    margin-top: 10px;
  }

  .wrapper__input{
    text-align: center;
  }
  .enter__user{
    width: 300px;
    height: 40px;
    border-radius: 14px;
    padding: 0 .7vw;
    outline: none;
    margin-top: 50px;
    border: solid #FFFFFF;
  }
  .enter__password{
    width: 300px;
    height: 40px;
    border-radius: 14px;
    padding: 0 .7vw;
    outline: none;
    margin-top: 20px;
    border: solid #FFFFFF;

  }
  .enter{
    width: 210px;
    border-radius: 10px;
    height: 40px;
    font-size: 20px;
    text-align: center;


  }
  .registration{
    width: 200px;
    border-radius: 10px;
    margin-top: 5px;
    font-size: 16px;
  }
  .wrapper__btn{

    text-align: center;
    flex-direction: column;
    border-radius: 14px;

  }
</style>