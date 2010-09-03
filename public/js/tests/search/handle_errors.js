new IN.Test.TestCase('Should fail for any user but the owner', function(){
  try
  {
    IN.API.PeopleSearch("not-me")
    .all(function(data){
      this.fail("should not call all()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
}, {'category':'people-search'});

new IN.Test.TestCase('Should fail for any user but the owner (multiple ids)', function(){
  try
  {
    IN.API.PeopleSearch("not-me", "other-id")
    .all(function(data){
      this.fail("should not call all()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
}, {'category':'people-search'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.PeopleSearch()
  .fields('foo', 'bar').all(function(data){
    this.fail("should not call all()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'people-search'});