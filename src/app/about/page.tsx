"use client";
import "../../styles/about.css";

export default function AboutPage() {
  return (
    <main className="about-container">
      {/* 인사말 */}
      <section className="intro-section">
        <h1 className="section-title">🎮 안녕하세요, 강혁입니다!</h1>
        <p className="intro-text">
          저는 <strong>게임사 프론트엔드 개발자</strong>를 목표로 꾸준히 성장하고 있는 개발자입니다.
          <br />
          Nexon, Smilegate처럼 멋진 곳에서 일하는 것이 꿈이지만,
          <br />
          작고 단단한 곳에서 경험을 쌓으며 올라가고 싶습니다.
        </p>
      </section>

      {/* 성장 스토리 */}
      <section className="intro-section">
        <h2 className="section-title">🌱 나의 이야기</h2>
        <p className="intro-text">
          개발을 처음 시작했을 때는 단순히 웹사이트를 만들어보고 싶다는 호기심에서 출발했습니다.
          <br />
          하지만 점차 게임 커뮤니티, 포털, 상점 UI를 보며
          <strong>이걸 내가 만들 수 있을까?</strong>라는 생각이 들었고, 그때부터 게임 프론트엔드
          개발자를 목표로 공부를 시작하게 되었습니다.
          <br />
          지금은 하루하루 배운 것을 기록하고, 작더라도 직접 만들어보는 것에서 큰 보람을 느끼고
          있습니다.
        </p>
      </section>

      {/* 기술 스택 */}
      <section className="skills-section">
        <h2 className="section-title">🛠 기술 스택</h2>
        <ul className="skills-list">
          <li>HTML / CSS / SCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React / Next.js</li>
          <li>Node.js / Express (학습 중)</li>
          <li>MySQL, MongoDB (학습 예정)</li>
          <li>Git / GitHub / Vercel</li>
        </ul>
      </section>

      {/* 프로젝트 */}
      <section className="projects-section">
        <h2 className="section-title">📁 포트폴리오</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>CodeNote 블로그</h3>
            <p>
              매일 학습을 기록하는 개발 블로그입니다.
              <br />
              게임사 취업을 목표로, 포털 스타일로 UI를 구성하고 있습니다.
            </p>
            <a href="https://codenote-log.vercel.app" target="_blank" rel="noopener noreferrer">
              👉 블로그 바로가기
            </a>
          </div>
          <div className="project-card">
            <h3>Game User 마이페이지 (예정)</h3>
            <p>
              게임 유저의 캐릭터 상태, 보유 아이템을 조회할 수 있는
              <br />
              마이페이지 스타일의 웹 UI를 제작 예정입니다.
            </p>
            <span>🚧 작업 예정</span>
          </div>
        </div>
      </section>

      {/* 마무리 */}
      <section className="intro-section">
        <h2 className="section-title">🎯 나의 다짐</h2>
        <p className="intro-text">
          저는 빠른 성장이 아닌, 꾸준하고 단단한 성장을 추구합니다.
          <br />
          오늘은 어제보다 하나 더 알아가는 개발자,
          <strong>게임을 좋아하고, 게임 유저 경험을 존중하는 프론트엔드 개발자</strong>가 되고
          싶습니다.
          <br />
          지금 이 순간도 그렇게 나아가고 있습니다.
        </p>
      </section>
    </main>
  );
}
