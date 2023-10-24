//1. 조건에 따라 같은 장르끼리 묶기
//2. 묶긴 노래들을 재생순으로 정렬
//3. 노래를 2개까지 자르는 작업

//핵심키워드 : "묶는 것", "정렬"

function solution(genres, plays){
    const genreMap = new Map()

    genres
        .map((genre, index) => [genre,plays[index]]) //장르이름, 재생횟수
        .forEach(([genre, play], index) => {
            const data = genreMap.get(genre) || { total: 0, songs: []}
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, {play, index}]
                    .sort((a,b) => b.play - a.play)
                    .slice(0,2)
            })
        })
        return [...genreMap.entries()]
            .sort((a,b)=> b[1].total - a[1].total)
            .flatMap(item => item[1].songs)
            .map(song => song.index)

}