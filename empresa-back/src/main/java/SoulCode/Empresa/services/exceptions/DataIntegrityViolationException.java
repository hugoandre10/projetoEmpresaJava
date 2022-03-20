package SoulCode.Empresa.services.exceptions;

public class DataIntegrityViolationException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public DataIntegrityViolationException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DataIntegrityViolationException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public DataIntegrityViolationException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public DataIntegrityViolationException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public DataIntegrityViolationException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}


}
