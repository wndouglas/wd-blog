import moment from "moment"

// Takes an array of unformatted dates
export function getPostMonthsAndYears(postDates)
{
    let postYearsAndMonths = postDates.map((date) => 
    {
        const year = parseInt(moment(date).format('YYYY'))
        const month = parseInt(moment(date).format('MM'))
        return [year, month]
    })
    postYearsAndMonths.sort(([a, b], [c, d]) => c - a || d - b)
    postYearsAndMonths = Array.from(new Set(postYearsAndMonths.map(JSON.stringify)), JSON.parse)

    let postYearsAndMonthsUnFlattened = []
    postYearsAndMonthsUnFlattened.push([])
    let prevYear = postYearsAndMonths[0][0]
    postYearsAndMonthsUnFlattened[0].push(prevYear)
    postYearsAndMonthsUnFlattened[0].push([])
    let currIndex = 0
    postYearsAndMonths.forEach(date => {
        if(date[0] === prevYear)
        {
            postYearsAndMonthsUnFlattened[currIndex][1].push(date[1])
        }
        else
        {
            prevYear = date[0]
            postYearsAndMonthsUnFlattened.push([])
            currIndex++
            postYearsAndMonthsUnFlattened[currIndex].push(prevYear)
            postYearsAndMonthsUnFlattened[currIndex].push([])
            postYearsAndMonthsUnFlattened[currIndex][1].push(date[1])
        }
    })
    return postYearsAndMonthsUnFlattened
}