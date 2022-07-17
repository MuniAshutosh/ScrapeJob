// let jobsData = [{..}]

allJobDescriptions = jobsData.flatMap(i=>i.jobDescription).reduce((aggr, item)=>{return aggr+item})
allJobDescriptionWordArray  =  allJobDescriptions.split(" ").filter(word=>word.length!=0)
wordsCountMap = new Map()

allJobDescriptionWordArray.forEach(word=>{
  if(wordsCountMap.has(word))
    wordsCountMap.set(word, wordsCountMap.get(word)+1)
  else
    wordsCountMap.set(word, 1)
})
