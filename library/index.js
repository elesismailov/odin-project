

































// spy should keep track of return values
// spy must not forspy should keep track of return values
// spy must not forget old return values
// spy should remember new values tooget old return values
// spy should remember new values too
// function spyOn (func) {
//   let _callCount = 0;
//   let _calls = []
//   let _returns = []
//   function spy(...args) {
//     _callCount++
//     let re = func(...args)
// //     _calls.add(args)
//     args.map(arg => _calls.push(arg))
//     args.map(arg => _returns.push(re))
//     return re
//   }
//   spy.callCount = function () {
//     return _callCount
//   }
//   spy.wasCalledWith = function(arg) {
//     return _calls.includes(arg)
//   }
//   spy.returned = function(arg) {
//     return _returns.includes(arg)
//   }
//   return spy
// }