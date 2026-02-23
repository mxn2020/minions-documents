"""
Minions Documents Python SDK

Versioned text documents, templates, and file attachments
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Documents.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
