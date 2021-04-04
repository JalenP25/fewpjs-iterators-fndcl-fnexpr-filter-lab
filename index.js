function findMatching(drivers, string) {
    return drivers.filter( match =>
      match.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(drivers2, string2) {
    return drivers2.filter( match =>
      match.toLowerCase().indexOf(string2.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers3, string3) {
    return drivers3.filter( record => record.name === string3)
  }
