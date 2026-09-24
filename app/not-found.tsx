import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 60px",
        background: "#02060d",
        color: "#ffffff",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: "#3548ff",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        404 — Page Not Found
      </span>

      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 800,
          margin: "0 0 16px",
          lineHeight: 1.15,
        }}
      >
        The page you are looking for
        <br />
        does not exist.
      </h1>

      <p
        style={{
          color: "rgba(255, 255, 255, 0.65)",
          maxWidth: "480px",
          fontSize: "16px",
          lineHeight: 1.6,
          marginBottom: "36px",
        }}
      >
        It might have been moved, deleted, or the URL was mistyped.
      </p>

      <Link
        href="/"
        className="primary-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "14px 28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #3548ff, #2787e9)",
          color: "#ffffff",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Back to Home ↗
      </Link>
    </main>
  );
}
