<template>
    <div class="football">
        <h1>Football</h1>

        <div class="footballGrid">
            <div class="table">
                <div class="head">
                    <div class="position">Pl.</div>
                    <div class="name">Verein</div>
                    <div class="games">Sp.</div>
                    <div class="wins">S</div>
                    <div class="draws">U</div>
                    <div class="losses">N</div>
                    <div class="goals">Tore</div>
                    <div class="difference">Diff.</div>
                    <div class="points">Pkt.</div>
                </div>
                <div class="body">
                    <div class="team">
                        <div class="position">1</div>
                        <div class="name">Borussia Dortmund</div>
                        <div class="games">1</div>
                        <div class="wins">1</div>
                        <div class="draws">0</div>
                        <div class="losses">0</div>
                        <div class="goals">5:1</div>
                        <div class="difference">4</div>
                        <div class="points">3</div>
                    </div>
                    <div class="team">
                        <div class="position">2</div>
                        <div class="name">RB Leipzig</div>
                        <div class="games">1</div>
                        <div class="wins">1</div>
                        <div class="draws">0</div>
                        <div class="losses">0</div>
                        <div class="goals">4:0</div>
                        <div class="difference">4</div>
                        <div class="points">3</div>
                    </div>
                </div>
            </div>
            <div class="matchday">
                B
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Football'
    }
</script>

<style scoped>
    .football {
        display: flex;
        flex-flow: column;
    }

    .football .footballGrid {
        display: flex;
        justify-content: center;
    }

    .footballGrid > * {
        border: solid 1px black;
    }

    .table {
        display: flex;
        flex-flow: column;
    }

    .head {
        display: flex;
    }

    .body {
        display: flex;
        flex-flow: column;
    }

    .team {
        display: flex;
    }

    .head > * {
        text-align: left;
        border: solid 1px green;
        height: 24px;
        line-height: 24px;
        margin: auto;
        font-size: 18px;
    }

    .team > * {
        text-align: center;
        border: solid 1px green;
        height: 24px;
        line-height: 24px;
        margin: auto;
        font-size: 14px;
    }

    .position {
        width: 25px;
        padding-right: 5px;
    }

    .name {
        width: 200px;
    }

    .team .position {
        text-align: right;
    }

    .team .name {
        text-align: left;
    }

    .games {
        width: 30px;
    }

    .wins {
        width: 30px;
    }

    .draws {
        width: 30px;
    }

    .losses {
        width: 30px;
    }

    .goals {
        width: 60px;
    }

    .difference {
        width: 40px;
    }

    .points {
        width: 30px;
    }
</style>
