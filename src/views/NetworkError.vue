<template>
  <h1>Oops Youre Not Connected</h1>
  <h3>
    it seems you are having some network issue.take a breath go to
    <a @click="$router.go(-1)">back</a> and try again
  </h3>
</template>
