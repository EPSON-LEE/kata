var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  var sObj = {}
  

  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] === undefined ? sObj[s[i]] = 1 : sObj[s[i]]++
  }
    
    
  for (let i = 0; i < t.length; i++) {
      if (sObj[t[i]] === undefined) return false
      sObj[t[i]]--
  }

  console.log(sObj)  

  return !Object.values(sObj).filter(item => !!item).length   
};

s = "anagram"
t = "nagaram"

isAnagram(s, t)