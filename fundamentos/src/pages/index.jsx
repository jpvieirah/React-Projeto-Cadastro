import Navigator from "../components/Navigator"

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text="estiloso" destiny="/estiloso"/>
            <Navigator text="exemplo" destiny="/exemplo" collor="green"/>
            <Navigator text="jsx" destiny="/jsx"/>
            <Navigator text="Navegação #01" destiny="/navigator" collor="green" />
        </div>
    )
}