import { Meteor } from 'meteor/meteor';

import { Posts } from '/imports/models/model.js';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('posts', function(){
    return Posts.find();
  })

  Meteor.methods({
    'insert_post': function(post){
      Posts.insert(post);
      return true
    }
  })
  
});
