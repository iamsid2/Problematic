Template.postList.helpers({
  posts: function(){
    return Post.find();
  }
});
