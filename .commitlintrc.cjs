/** @type {import('cz-git').UserConfig} */
const Configuration = {
  extends:['@commitlint/config-conventional'],
  rules:{
    'type-enum':[
      2,
      'always',
      ['feat','fix','docs','style','refactor','test','chore'],
    ]
  }
}

module.exports=Configuration