import React from 'react';

import './Hearth.css';

const Hearth = ({favorite, changeFavorite}) => {

  // state = {
  //   hovered: true,
  //   setHovered: false,
  // }

  // const [hovered, setHovered] = useState(false);

  console.log("Hearth - favorite, changeFavorite - ", favorite, changeFavorite);
  // console.log("Hearth - changeFavorite - ", props.changeFavorite);

  return (



    <div id="main-content">
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={favorite}
        // defaultChecked={true}
        // checked={true}
        // onChange={props.changeFavorite(!props.favorite)}
        onClick={() => changeFavorite(!favorite)}
        // onMouseEnter={data-toggle="tooltip" data-placement="left" title="Tooltip on left"}
        // onMouseEnter={data-toggle="tooltip" data-placement="left" title="Tooltip on left"}
        // onMouseEnter={toggleHover}
        // onMouseLeave={toggleHover}

        data-tip="tooltip"
        data-delay-update='1000'

      // onMouseEnter={() => {
      //   ReactTooltip.show("asd")
      // }}

      // className={hovered ? 'data-toggle="tooltip" data-placement="left" title="Tooltip on left"' : ''}

      />
      {/* {props.favorite ? 'true' : 'false'} */}

      <label htmlFor="checkbox" >
        <svg className="icon" id="heart-svg" viewBox="467 392 58 57">
          <g id="Group"
            fill="none"
            fillRule="evenodd"
            transform="translate(467 392)">

            <path
              className="icon2"
              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart"
              fill="#AAB8C2"

              data-tip='Favorite'
              data-delay-update='1000'
              data-place='bottom'
              data-offset="{'bottom': 10, 'left': 0}"
            />

            <circle id="main-circ" fill="#E2264D" opacity={0} cx="29.5" cy="29.5" r="1.5" />
            <g id="grp7" opacity={0} transform="translate(7 6)">
              <circle id="oval1" fill="#9CD8C3" cx={2} cy={6} r={2} />
              <circle id="oval2" fill="#8CE8C3" cx={5} cy={2} r={2} />
            </g>
            <g id="grp6" opacity={0} transform="translate(0 28)">
              <circle id="oval1" fill="#CC8EF5" cx={2} cy={7} r={2} />
              <circle id="oval2" fill="#91D2FA" cx={3} cy={2} r={2} />
            </g>
            <g id="grp3" opacity={0} transform="translate(52 28)">
              <circle id="oval2" fill="#9CD8C3" cx={2} cy={7} r={2} />
              <circle id="oval1" fill="#8CE8C3" cx={4} cy={2} r={2} />
            </g>
            <g id="grp2" opacity={0} transform="translate(44 6)">
              <circle id="oval2" fill="#CC8EF5" cx={5} cy={6} r={2} />
              <circle id="oval1" fill="#CC8EF5" cx={2} cy={2} r={2} />
            </g>
            <g id="grp5" opacity={0} transform="translate(14 50)">
              <circle id="oval1" fill="#91D2FA" cx={6} cy={5} r={2} />
              <circle id="oval2" fill="#91D2FA" cx={2} cy={2} r={2} />
            </g>
            <g id="grp4" opacity={0} transform="translate(35 50)">
              <circle id="oval1" fill="#F48EA7" cx={6} cy={5} r={2} />
              <circle id="oval2" fill="#F48EA7" cx={2} cy={2} r={2} />
            </g>
            <g id="grp1" opacity={0} transform="translate(24)">
              <circle id="oval1" fill="#9FC7FA" cx="2.5" cy={3} r={2} />
              <circle id="oval2" fill="#9FC7FA" cx="7.5" cy={2} r={2} />
            </g>
          </g>
        </svg>

        {/* <svg width='75' height='50'>
          <circle data-tip='=( •̀‿•́)' data-for='svgTooltip2'
            cx='25' cy='25' r='22' fill='#fff' stroke='#000' strokeWidth='4' />
          <circle data-tip='=( ❂‿❂)' data-for='svgTooltip2'
            cx='50' cy='25' r='16' fill='#fdf' stroke='#404' strokeWidth='4' />
        </svg> */}

      </label>
    </div>
  )
}

export default Hearth;