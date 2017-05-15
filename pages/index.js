
import Light from '../components/Light.js'
import Switch from '../components/Switch.js'

export default () => (
  <div className="container">
    <Light />
    <Switch />
    <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center
          }
        `}</style>
    <style global jsx>{`
          body {
            background: #FFFAFA;
          }
        `}</style>
  </div>
)


